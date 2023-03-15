import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons"
import { useState } from "react"
import { WrapperButtonPassword, WrapperPassword, WrapperPasswordInput } from "./styles"

const PasswordInput = ({ name, onChange, value, placeholder }: { placeholder: string, value: string, name: string, onChange: (value: {}) => void }) => {
  const [hidden, setHidden] = useState<'input' | 'password'>('password')

  return (
    <WrapperPassword>
      <WrapperPasswordInput>
        <input
          type={hidden}
          className="form__field"
          placeholder={placeholder}
          name={name}
          id={name}
          required
          onChange={event => onChange({ [name]: event.target.value })}
          value={value}
        />
        <label htmlFor={name} className="form__label">{placeholder}</label>
      </WrapperPasswordInput>
      
      <WrapperButtonPassword className='buttons-password'>
      { hidden === 'password'
        ? <button onClick={() => setHidden('input')}>
            <EyeOutlined />
          </button>
        : <button onClick={() => setHidden('password')}>
            <EyeInvisibleOutlined />
          </button>
      }
      </WrapperButtonPassword>
    </WrapperPassword>
  )
}

export default PasswordInput