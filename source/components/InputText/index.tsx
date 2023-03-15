import { WrapperInputText } from "./styles"

const InputText = ({ name, onChange, value, placeholder }: { placeholder: string, value: string, name: string, onChange: (value: {}) => void }) => {
  return (
    <WrapperInputText>
      <input
        type="input"
        className="form__field"
        placeholder={placeholder}
        name={name}
        id={name}
        required
        onChange={event => onChange({ [name]: event.target.value })}
        value={value}
      />
      <label htmlFor={name} className="form__label">{placeholder}</label>
    </WrapperInputText>
  )
}

export default InputText