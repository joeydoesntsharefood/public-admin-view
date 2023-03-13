import { WrapperForm } from "@/styles/globalStyles"
import { Switch } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useState } from "react"
import CustomDatePicker from "../CustomDatePicker"
import DropDown from "../DropDown"
import InputText from "../InputText"
import { locations } from "./mockdata"
import { WrapperPickers, WrapperSelect } from "./styles"

const FormSchedule = ({ values, onChange }: { values: any, onChange: any }) => {
  const [showInvitesArea, setShowInvitesArea] = useState<boolean>(false)

  return (
    <WrapperForm>
      <InputText name="eventName" placeholder="Nome do evento" onChange={onChange} value={values?.eventName ?? ''} />
      <WrapperSelect>
        <DropDown
          name="placeName"
          onChange={onChange}
          options={
            locations.map((value: { name: string, capacity: number, id: number }) => ({ label:  `${value.name} - Capacidade: ${value.capacity}`, value: value.name }))
          }
          value={values?.placeName ?? ''}
        />
      </WrapperSelect>
      <WrapperPickers>
        <CustomDatePicker label="Inicia"  name="startAt" onChange={onChange} value={values?.startAt ?? ''} />
        <CustomDatePicker label="Finaliza"  name="endAt" onChange={onChange} value={values?.endAt ?? ''} />
      </WrapperPickers>
      <Switch
        checkedChildren={<>Evento aberto</>}
        unCheckedChildren={<>Evento fechado</>}
        onChange={value => {
          setShowInvitesArea(value)
          onChange({ isEventOpen: value})
        }}
        checked={values?.isEventOpen}
      />
      {
        !showInvitesArea && 
          <TextArea
            rows={4}
            placeholder="Insira os e-mails dos convidados separados por ';'"
            value={values?.invitesId?.replace(',', ';') ?? ''}
            onChange={event => onChange({ invitesId: event.target.value.replace(';', ',') })}
          />
      }
      <InputText name="hostId" onChange={onChange} placeholder='E-mail do host' value={values?.hostId ?? ''} />
    </WrapperForm>
  )
}

export default FormSchedule
