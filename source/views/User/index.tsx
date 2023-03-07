import Button from "@/source/components/Button";
import InputText from "@/source/components/InputText";
import { Table } from "antd";
import Card from "antd/es/card/Card"
import { useRouter } from "next/router";
import { useState } from "react";
import { WrapperFilters, WrapperUser } from "./styles"

const dataSource = [
  {
    id: 1,
    key: '1',
    name: 'Mike',
    corp: 'The Public House',
    email: 'teste@gmail.com',
  },
  {
    id: 2,
    key: '2',
    name: 'John',
    corp: 'The Public House',
    email: 'teste2@gmail.com',
  },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Empresa',
    dataIndex: 'corp',
    key: 'corp',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
];

const Schedule = () => {
  const router = useRouter()
  const [search, setSearch] = useState<{ search: string }>()

  const handleSearch = (value: any) => setSearch({ ...value })

  return (
    <WrapperUser>
      <Card>
        <WrapperFilters>
          <Button onClick={() => router.push('/create-user')}>Criar usuário</Button>
          <InputText value={search?.search ?? ''} name="search" onChange={handleSearch} placeholder='Buscar por nome'/>
        </WrapperFilters>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </WrapperUser>
  )
}

export default Schedule