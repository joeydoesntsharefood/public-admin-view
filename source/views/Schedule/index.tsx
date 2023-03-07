import Button from "@/source/components/Button";
import FormSchedule from "@/source/components/FormSchedule";
import { ISchedule } from "@/source/components/FormSchedule/types";
import InputText from "@/source/components/InputText";
import { Drawer, Table, Tag } from "antd";
import Card from "antd/es/card/Card"
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../../components/FooterDrawer/footer";
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
  },
  {
    title: 'Inicia em',
    dataIndex: 'startAt',
    key: 'startAt',
    render: (value: IDate) => {
      return `${value.day}/${value.month}/${value.year} ${value.hour}:${value.minute}:${value.seconds}`
    }
  },
  {
    title: 'Finaliza em',
    dataIndex: 'endAt',
    key: 'endAt',
    render: (value: IDate) => {
      return `${value.day}/${value.month}/${value.year} ${value.hour}:${value.minute}:${value.seconds}`
    }
  }
];

const Schedule = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false)
  const [search, setSearch] = useState<{ search: string }>()
  const [values, setValues] = useState<ISchedule>()

  const handleSearch = (value: any) => setSearch({ ...value })
  const handleShowDrawer = () => setShowDrawer(!showDrawer)

  const handleValues = (changeValues: any) => setValues({ ...values, ...changeValues })

  const onSubmit = async () => {
    try {
      console.log(values)
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <>
      <Drawer
        title="Criar Evento"
        placement="right"
        onClose={handleShowDrawer}
        open={showDrawer}
        footer={<Footer onCancel={handleShowDrawer} onSubmit={onSubmit} />}
      >
        <FormSchedule onChange={handleValues} values={values} />
      </Drawer>

      <WrapperUser>
        <Card>
          <WrapperFilters>
            <Button
              onClick={handleShowDrawer}
            >
              Criar evento
            </Button>
            <InputText
              value={search?.search ?? ''}
              name="search"
              onChange={handleSearch}
              placeholder='Buscar por nome'
            />
          </WrapperFilters>
          <Table
            dataSource={scheduleData}
            columns={columns}
          />
        </Card>
      </WrapperUser>
    </>
  )
}

export default Schedule