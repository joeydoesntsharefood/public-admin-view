import { WrapperCustomSwitch } from "./styles"

const CustomSwitch = () => {
  return (
    <WrapperCustomSwitch>
      <input type="checkbox" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </WrapperCustomSwitch>
  )
}

export default CustomSwitch