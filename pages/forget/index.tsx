import Button from "@/source/components/Button"
import InputText from "@/source/components/InputText"
import { WrapperCardLogin, WrapperLogo } from "@/styles/home"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import pubLogo from '../../assests/pub-logo.png'

const Forget = () => {
  const router = useRouter()
  const [showInputCode, setShowInputCode] = useState<boolean>(false)
  const [emailAndCode, setEmailAndCode] = useState<{ email: string, code: string }>({ code: '', email: '' })
  
  const handleShowInputCode = () => setShowInputCode(!showInputCode)

  const handleEmailAndCode = (value: {}) => setEmailAndCode({ ...emailAndCode, ...value })

  const sendEmail = async () => {
    handleShowInputCode()
  }

  return (
    <WrapperCardLogin>
      <WrapperLogo>
        <Image alt="pub-logo" src={pubLogo} />
      </WrapperLogo>

      { !showInputCode
        ? <InputText name="email" onChange={handleEmailAndCode} placeholder='E-mail' value={emailAndCode.email} />
        : <p>Enviamos um código para seu email: {emailAndCode.email} insira abaixo o código para atualizar sua senha.</p>
      }
      
      {
        showInputCode && (
          <InputText name="code" onChange={handleEmailAndCode} placeholder='Código' value={emailAndCode.code} />
        )
      }

      <Button onClick={() => sendEmail()}>Enviar Link</Button>
      <Button onClick={() => router.push('/')}>Voltar</Button>
    </WrapperCardLogin>
  )
}

export default Forget