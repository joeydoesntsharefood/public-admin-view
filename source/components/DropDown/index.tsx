const DropDown = ({ name, onChange, value, options }: { options: Array<{ value: string, label: string }>, name: string, onChange: (value: {}) => void, value: string }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={event => onChange({ [name]: event.target.value })}
    >
      {options.map((value, index) => <option key={`${index}-option`} value={value.value}>{value.label}</option>)}
    </select>
  )
}

export default DropDown