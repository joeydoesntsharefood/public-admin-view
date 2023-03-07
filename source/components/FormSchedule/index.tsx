import { useState } from "react"
import DropDown from "../DropDown"
import InputText from "../InputText"
import { locations } from "./mockdata"
import { ISchedule } from "./types"

const FormSchedule = ({ values, onChange }: { values: any, onChange: any }) => {
  return (
    <>
      <InputText name="Nome" placeholder="Nome do evento" onChange={onChange} value={values?.eventName ?? ''} /> 
      <InputText name="chain" placeholder="Cadeia" onChange={onChange} value={values?.chain ?? ''} />
      <DropDown name="placeName" onChange={onChange} options={locations.map((value: { name: string, capacity: number, id: number }) => ({ label:  `Nome: ${value.name} - Capacidade: ${value.capacity}`, value: value.name }))} value={values?.placeName ?? ''} />
    </>
  )
}

export default FormSchedule
