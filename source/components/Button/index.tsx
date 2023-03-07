import { WrapperButton } from "./styles"

const Button = ({ children, onClick }: { children: string, onClick: () => void }) => {
  return (
    <WrapperButton>
      <button className="custom-btn btn" onClick={onClick}><span>{children}</span></button>
    </WrapperButton>
  )
}

export default Button