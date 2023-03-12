import { WrapperDatePicker } from "./styles"

const CustomDatePicker = ({ label, value, onChange, name }: { label: string, value: string, onChange(value: {}): void, name: string }) => {
  return (
    <WrapperDatePicker>
      <label>{label}</label>
      <input value={value} onChange={(event) => onChange({ [name]: event.target.value })} type="datetime-local"/>
    </WrapperDatePicker>
  )
}

export default CustomDatePicker