import Button from "@/source/components/Button";
import InputText from "@/source/components/InputText";
import { Table, Tag } from "antd";
import Card from "antd/es/card/Card"
import { useRouter } from "next/router";
import { useState } from "react";
import { IDate, scheduleData } from "./mockdata";
import { WrapperFilters, WrapperUser } from "./styles"

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Nome',
    dataIndex: 'eventName',
    key: 'eventName',
  },
  {
    title: 'Local',
    dataIndex: 'placeName',
    key: 'placeName',
  },
  {
    title: 'Tipo de evento',
    dataIndex: 'isEventOpen',
    key: 'isEventOpen',
    render: (value: any) => {
      if (value) return <Tag color="blue">Aberto</Tag>
      return <Tag color="red">Fechado</Tag>
    }
  }
];

const URLs = () => {
  const router = useRouter()
  const [search, setSearch] = useState<{ search: string }>()

  const handleSearch = (value: any) => setSearch({ ...value })

  return (
    <WrapperUser>
      <Card>
        <WrapperFilters>
          <Button onClick={() => router.push('/create-user')}>Adicionar contéudo</Button>
          <InputText value={search?.search ?? ''} name="search" onChange={handleSearch} placeholder='Buscar por nome'/>
        </WrapperFilters>
        <Table dataSource={scheduleData} columns={columns} />
      </Card>
    </WrapperUser>
  )
}

export default URLs