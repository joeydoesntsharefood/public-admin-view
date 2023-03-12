import Button from "@/source/components/Button";
import FormSchedule from "@/source/components/FormSchedule";
import ServerTable from "@/source/components/ServerTable";
import ScheduleRepository, { IScheduling } from "@/source/repository/ScheduleRepository";
import { Drawer, Tag } from "antd";
import Card from "antd/es/card/Card"
import { useState } from "react";
import Footer from "../../components/FooterDrawer/footer";
import { IDate } from "./mockdata";
import { WrapperUser } from "./styles"

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
    title: 'Anfitrião',
    dataIndex: 'hostId',
    key: 'hostId',
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
      return `${value.day}/${value.month}/${value.year} ${value.hour}:${value.minute}:${value.seconds}0`
    }
  },
  {
    title: 'Finaliza em',
    dataIndex: 'endAt',
    key: 'endAt',
    render: (value: IDate) => {
      return `${value.day}/${value.month}/${value.year} ${value.hour}:${value.minute}:${value.seconds}0`
    }
  }
];

const Schedule = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false)
  const [values, setValues] = useState<IScheduling>()
  const [loading, setLoading] = useState<boolean>(false)
  const [refresh, setRefresh] = useState<number>(0)
  
  const handleShowDrawer = () => setShowDrawer(!showDrawer)

  const handleValues = (changeValues: any) => setValues({ ...values, ...changeValues })

  const onSubmit = async () => {
    setLoading(true)
    try {
      if (!values) throw new Error('sem valores')
      const formatValues: IScheduling = { ...values, ownerId: 1, chain: 'teste', placeId: 1, isEventOpen: Boolean(values.isEventOpen) }
      await ScheduleRepository.create(formatValues)

      setValues(undefined)
      setRefresh(refresh + 1)
    } catch (err: any) {
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <>
      <Drawer
        title="Criar Evento"
        placement="right"
        onClose={handleShowDrawer}
        open={showDrawer}
        footer={<Footer loading={loading} onConfirmText='Agendar' onCancel={handleShowDrawer} onSubmit={onSubmit} />}
      >
        <FormSchedule onChange={handleValues} values={values} />
      </Drawer>

      <WrapperUser>
        <Card>
          <ServerTable
            path='schedule'
            columns={columns}
            refresh={refresh}
          >
            <Button
              onClick={handleShowDrawer}
            >
              Criar evento
            </Button>
          </ServerTable>
        </Card>
      </WrapperUser>
    </>
  )
}

export default Schedule