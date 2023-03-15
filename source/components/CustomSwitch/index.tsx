import { WrapperCustomSwitch } from "./styles"

const CustomSwitch = () => {
  return (
    <WrapperCustomSwitch>
    <div className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true"></i>
          <label className="switch btn-color-mode-switch">
                <input type="checkbox" name="color_mode" id="color_mode" value="1" />
                <label htmlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
            </label>
          <i className="fa fa-moon-o" aria-hidden="true"></i>
          <p className="by"><a href="https://github.com/NadeeshaEranjan" target="_blank">Github/NadeeshaEranjan</a></p>
      </div>
    </WrapperCustomSwitch>
  )
}

export default CustomSwitch