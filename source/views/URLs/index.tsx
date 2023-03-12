import Button from "@/source/components/Button";
import Footer from "@/source/components/FooterDrawer/footer";
import FormPainel from "@/source/components/FormPainel";
import PainelsRepository, { AddContentPainel } from "@/source/repository/PainelsRepository";
import { Col, Drawer, Modal, Row, Select, Space } from "antd";
import Card from "antd/es/card/Card"
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { WrapperColumn, WrapperColumnSelect, WrapperFilters, WrapperRow, WrapperRowFilters, WrapperSelect, WrapperUser } from "./styles"
import { IPainel } from "@/source/repository/PainelsRepository"
import app from "@/source/config/app";
import TablePainels from "./table";
import InputText from "@/source/components/InputText";
import Column from "antd/es/table/Column";
import { _errors } from "@/source/utils/errorsValidate";

const URLs = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [showDrawer, setShowDrawer] = useState<boolean>(false)
  const [values, setValues] = useState<IPainel>()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [options, setOptions] = useState<Array<{ label: string, value: string }>>([])
  const [loadingOptions, setLoadingOptions] = useState<boolean>(true)
  const [form] = useForm()
  const [dataSource, setDataSource] = useState<any>([])
  const [loadingData, setLoadingData] = useState<boolean>()
  const [search, setSearch] = useState<string>('')
  const [paineId, setPainelId] = useState<string>('')
  const [errors, setErrors] = useState<_errors>([])

  const handleChangeValues = (changeValues: any) => setValues({ ...values, ...changeValues })

  const handleShowDrawer = () => setShowDrawer(!showDrawer)

  const handleShowModal = () => setShowModal(!showModal)

  const handleSearch = (value: any) => setSearch(value.search)
  
  const handlePainelId = (value: string) => setPainelId(value)

  useEffect(() => {
    const getInUse = async () => {
      setLoadingOptions(true)
      try {
        const response = await app.get('/painels-in-use')
        const mapValues = ({ id }: { id: number, name: string, inUse: number }) => ({ value: String(id), label: String(id) })
        const format = response.data.data.map(mapValues)
        setOptions(format)
      } catch (err: any) {
        console.log(err?.message)
      }
      setLoadingOptions(false)
    }

    getInUse()
  }, [])
  
  const getData = async () => {
    setLoadingData(true)
    try {
      const responseContents = await PainelsRepository.list()
      const responsePainels = await app.get('/painels-in-use')
      const valuesPainels = responsePainels.data.data
      const values = responseContents.data
      const array: Array<{ painelId: number, painelTitle: string, content: Array<{ title: string, orderExp: number, id?: number, uri: string }> }> = []

      if (!values) throw new Error('Não foi possível mapear seus dados.')

      for (let value of valuesPainels) {
        array.push({ painelId: value.id, painelTitle: value.name, content: [] })
      }

      for (let value of values) {
        for (let painel of array) {
          if (painel.painelId === value.painelId) painel.content.push({ id: value.id, orderExp: value.orderExp, title: value.title, uri: value.uri })
        }
      }

      setDataSource(array)
    } catch (err: any) {
      console.log(err)
    }
    setLoadingData(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const onSubmit = async () => {
    setErrors([])
    setLoading(true)
    try {
      if (!values?.painelId) {
        setLoading(false)
        setErrors([ { message: 'Selecionar um ID para o painel.', key: 'painelId' } ])
        return
      }
      const valuesForm = form.getFieldsValue()
      const data = {
        painelName: values?.painelTitle,
        contents: valuesForm.urls.map((value: any) => ({ ...value, painelTitle: values?.painelTitle }))
      }
      const response = await AddContentPainel(data, String(values?.painelId))

      if (response?.error) {
        setLoading(false)
        setErrors(response?.error)
        return
      }

      getData()
    } catch (err: any) {
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <>
      <Modal title="Adicionar monitor" open={showModal} onOk={handleShowModal}>
      </Modal>
      <Drawer
        width={'45%'}
        open={showDrawer}
        onClose={handleShowDrawer}
        title='Adicionar monitor'
        footer={
          <Footer
            loading={loading}
            onCancel={handleShowDrawer}
            onConfirmText='Adicionar monitor'
            onSubmit={onSubmit}
          />
        }
      >
        <FormPainel
          form={form}
          onChange={handleChangeValues}
          values={values}
          errors={errors}
        />
      </Drawer>

      <WrapperUser>
        <Card>
          <WrapperFilters>
            <WrapperRow>
              <WrapperColumn>
                <WrapperRowFilters>
                  <>
                    { !loadingOptions && 
                      <WrapperColumnSelect>
                        <Select
                          showSearch
                          placeholder="Selecione o Painel"
                          optionFilterProp="children"
                          filterOption={(input: any, option: any) => (option?.label ?? '').includes(input)}
                          filterSort={(optionA: any, optionB: any) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                          }
                          options={options}
                          defaultValue={'0'}
                          onChange={handlePainelId}
                          value={paineId}
                        />
                      </WrapperColumnSelect>
                    }
                  </>
                  <InputText
                    name="search"
                    onChange={handleSearch}
                    placeholder='Buscar por nome'
                    value={search}
                  />
              </WrapperRowFilters>
              </WrapperColumn>
              <WrapperColumn>
                <Button
                  onClick={handleShowDrawer}
                >
                  Adicionar monitor
                </Button>
              </WrapperColumn>
            </WrapperRow>
          </WrapperFilters>
          <TablePainels data={dataSource}/>
        </Card>
      </WrapperUser>
    </>
  )
}

export default URLs



