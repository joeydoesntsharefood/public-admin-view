import Button from "@/source/components/Button"
import PasswordInput from "@/source/components/PasswordInput"
import app from "@/source/config/app"
import { WrapperCardLogin, WrapperLogo } from "@/styles/home"
import Image from "next/image"
import { useEffect, useState } from "react"
import pubLogo from '../../assests/pub-logo.png'
import { GetServerSidePropsContext } from 'next'
import { useLocation } from "react-use"
import Fields from "./fields"
import InputText from "@/source/components/InputText"
import { Alert, Typography } from "antd"
import { WrapperAlert } from "./styles"
import { useRouter } from "next/router"

const Verify = () => {
  const [values, setValues] = useState<{ password: string, confirmPassword: string }>({ confirmPassword: '', password: '' })
  const [verifyToken, setVerifyToken] = useState<boolean>(false)
  const [code, setCode] = useState<string>('')
  const [noEqual, setNoEqual] = useState<boolean>(false)
  const [inputEmail, setInputEmail] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const router = useRouter()

  const handleValues = (value: any) => setValues({ ...values, ...value })
  const handleCode = (value: any) => setCode(value.code)
  const handleEmail = (value: any) => {
    setInputEmail(true)
    setEmail(value.email)
  }

  useEffect(() => {
    if (values.password !== values.confirmPassword) setNoEqual(true)
    else setNoEqual(false)

  }, [values])

  const onSubmitPassword = async () => {
    try {
      const response = await app.post('/unauth/master/password', { password: values.password, code, email })

      if (response?.data?.success) router.push('/')
    } catch (err: any) {
      console.log(err)
    }
  }

  const onSubmitCode = async () => {
    try {
      const response = await app.post('/unauth/master/verify', { code, email })

      if (response?.data?.success) setVerifyToken(true)
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <WrapperCardLogin>
      <WrapperLogo>
        <Image alt="pub-logo" src={pubLogo} />
      </WrapperLogo>

      { verifyToken &&
        <>
          <Typography.Text>
            Abaixo insira uma senha
          </Typography.Text>
          <Fields
            onChange={handleValues}
            values={values}
          />
          { (noEqual && (values.confirmPassword.length >= values.password.length)) && <WrapperAlert>A senhas não são iguais!</WrapperAlert> }
        </>
      }

      { !inputEmail &&
        <>
          <Typography.Text>
            Informe a abaixo a ser verificado para seu primeiro acesso.
          </Typography.Text>

          <InputText
            name="email"
            onChange={handleEmail}
            placeholder='E-mail'
            value={email}
          />
        </>
      }

      { (!verifyToken && inputEmail) &&
        <>
          <Typography.Text>
            Informe a abaixo o código de verificação para seu primeiro acesso.
          </Typography.Text>

          <InputText
            name="code"
            onChange={handleCode}
            placeholder='Código de Verificação'
            value={code}
          />
        </>
      }

      <Button onClick={!verifyToken ? onSubmitCode : onSubmitPassword}>Confirmar</Button>
    </WrapperCardLogin>
  )
}

export default Verify

