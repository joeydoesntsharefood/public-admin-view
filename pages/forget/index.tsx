import Button from "@/source/components/Button"
import InputText from "@/source/components/InputText"
import app from "@/source/config/app"
import { emailCodeState } from "@/source/recoil"
import { WrapperCardLogin, WrapperLogo } from "@/styles/home"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import pubLogo from '../../assests/pub-logo.png'

const Forget = () => {
  const router = useRouter()
  const [showInputCode, setShowInputCode] = useState<boolean>(false)
  const [emailAndCode, setEmailAndCode] = useState<{ email: string, code: string }>({ code: '', email: '' })
  const [emailCode, setEmailCode] = useRecoilState(emailCodeState)
  
  const handleShowInputCode = () => setShowInputCode(!showInputCode)

  const handleEmailAndCode = (value: {}) => setEmailAndCode({ ...emailAndCode, ...value })

  const sendEmail = async () => {
    try {
      const response = await app.post('/unauth/forget', { email: emailAndCode.email })

      if (response.data.success) handleShowInputCode()
    } catch (err: any) {
      console.log(err)
    }
  }

  const sendCode = async () => {
    try {
      const response = await app.post('/unauth/confirm-token', { code: emailAndCode.code })

      if (response.data.success) {
        setEmailCode({ code: emailAndCode.code, email: emailAndCode.email })
        router.push('/new-password')
      }
    } catch (err: any) {
      console.log(err)
    }
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

      <Button onClick={() => !showInputCode ? sendEmail() : sendCode()}>Enviar Link</Button>
      <Button onClick={() => router.push('/')}>Voltar</Button>
    </WrapperCardLogin>
  )
}

export default Forget