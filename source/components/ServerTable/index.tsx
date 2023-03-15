import InputText from "@/source/components/InputText";
import { Divider, Table } from "antd";
import Card from "antd/es/card/Card"
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import serverTableConsumer from "./consumer";
import { WrapperBottom, WrapperFilters, WrapperServerTable, WrapperTop } from "./styles"

interface Props {
  filters?: {}
  children?: any
  path: string
  columns: Array<any>
  refresh: number
  expandable?: any
  placeholderSearch?: string
  scrollX?: any
  actions: any
}

const ServerTable = ({ filters, actions, scrollX, placeholderSearch, children, path, columns, refresh, expandable }: Props) => {
  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<Array<any>>([])
  const [loadingData, setLoadingData] = useState<boolean>(false)

  const getData = async ({ search, query }: { search?: string, query?: string }) => {
    setLoadingData(true)
    try {
      let response: any
      if (query) response = await serverTableConsumer(`${path}?${query}`)
      else response = await serverTableConsumer(path, search)
      console.log(response)
      setData(response?.data ?? [])
    } catch (err: any) {
      console.log(err)
    }
    setLoadingData(false)
  }

  useEffect(() => {
    if (filters) {
      let formatedFilters: Array<string> = []

      Object.entries(filters).forEach(values => {
        const [key, value] = values

        const formatedValue = String(value)
        
        if (formatedValue.length === 0 ) return ''

        if (['startAt', 'endAt'].includes(key)) {
          if (formatedValue.length === 0) return ''
          return formatedFilters.push(`${key}=${value}`)
        }
      
        return formatedFilters.push(`${key}=${formatedValue}`)
      })

      const query = String(formatedFilters).replaceAll(',', '&')

      getData({ query })
    }
  }, [filters])
  
  const searchData = async () => {
    try {
      if (search.length === 0) getData({})
      else getData({ search })
    } catch (err: any) {
      console.log(err)
    }
  }
  
  useDebounce(searchData, 500, [search])

  const handleSearch = (value: any) => setSearch(value.search)

  useEffect(() => {
    getData({})
  }, [])

  return (
    <WrapperServerTable>
      <Card>
        <WrapperFilters>
          <WrapperTop>
            <InputText
              value={search}
              name="search"
              onChange={handleSearch}
              placeholder={placeholderSearch ?? 'Buscar por nome'}
            />
            
            { actions && actions }
          </WrapperTop>
          <Divider orientation="left">Filtros</Divider>
          <WrapperBottom>
            { children && children }
          </WrapperBottom>
        </WrapperFilters>
        <Table
          dataSource={data}
          columns={columns}
          loading={loadingData}
          pagination={{ defaultCurrent: 1, defaultPageSize: 10 }}
          scroll={{ y: 200, x: scrollX ?? undefined }}
          expandable={expandable}
        />
      </Card>
    </WrapperServerTable>
  )
}

export default ServerTable