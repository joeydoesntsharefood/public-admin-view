import Button from "@/source/components/Button"
import { Spin } from "antd"
import { WrapperFooterDrawer } from "./styles"

const Footer = ({ loading, onSubmit, onCancel, onConfirmText }: { onSubmit: () => void, onCancel: () => void, onConfirmText: string, loading: boolean }) => {
  return (
    <WrapperFooterDrawer>
      { !loading &&
        <>
          <Button onClick={onSubmit}>{onConfirmText}</Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </>
      }
      { loading && <Spin /> }
    </WrapperFooterDrawer>    
  )
}

export default Footer