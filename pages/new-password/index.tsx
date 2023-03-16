import Button from "@/source/components/Button"
import PasswordInput from "@/source/components/PasswordInput"
import app from "@/source/config/app"
import { emailCodeState } from "@/source/recoil"
import { WrapperCardLogin, WrapperLogo } from "@/styles/home"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import pubLogo from '../../assests/pub-logo.png'

const NewPassword = () => {
  const [values, setValues] = useState<any>()
  const router = useRouter()
  const [emailCode, setEmailCode] = useRecoilState(emailCodeState)

  const handleValues = (value: any) => setValues({ ...values, ...value })

  const onSubmit = async () => {
    if (values.newPassword !== values.newConfirmPassword) console.log('Senhas diferentes')
    try {
      const data = { newPassword: values.newPassword, code: emailCode.code, email: emailCode.email }
      const response = await app.post('/unauth/new-passowrd', data)

      if (response?.data?.success) router.push('/')
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <WrapperCardLogin>
      <WrapperLogo>
        <Image alt="pub-logo" src={pubLogo} />
      </WrapperLogo>

      <PasswordInput name='newPassword' onChange={handleValues} placeholder='Nova Senha' value={values?.newPassword ?? ''} />
      <PasswordInput name='newConfirmPassword' onChange={handleValues} placeholder='Nova Senha' value={values?.newConfirmPassword ?? ''} />

      <Button onClick={onSubmit}>Confirmar</Button>
    </WrapperCardLogin>
  )
}

export default NewPassword