import Button from "@/source/components/Button"

const Footer = ({ onSubmit, onCancel }: { onSubmit: () => void, onCancel: () => void }) => {
  return (
    <>
      <Button onClick={onSubmit}>Cadastrar</Button>
      <Button onClick={onCancel}>Cancelar</Button>
    </>    
  )
}

export default Footer