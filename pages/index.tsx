import Button from "@/source/components/Button"
import InputText from "@/source/components/InputText"
import app from "@/source/config/app"
import AuthRepository from "@/source/repository/AuthRepository"
import { WrapperCardLogin, WrapperLogo } from "@/styles/home"
import { Modal } from "antd"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import pubLogo from '../assests/pub-logo.png'

const Home = () => {
  const [access, setAccess] = useState<{ email: string, password: string }>({ email: '', password: '' })
  const router = useRouter()

  const handleChangeAccess = (value: {}) => setAccess({ ...access, ...value })

  const onSubmit = async () => {
    try {
      const response = await AuthRepository.signin(access)
      if (!response?.success) throw new Error(response?.message)
      console.log(response?.userData)
      Modal.success({
        title: 'Conseguimos ',
        content: response?.message
      })
      router.push('/home')
    } catch (err: any) {
      Modal.error({
        title: 'Aviso',
        content: err?.message
      })
    }
  }

  useEffect(() => {
    const test = async () => {
      try {
        const response = await axios.get('http://localhost:8000/')
        console.log(response)
      } catch (err: any) {
        console.log(err)
      }
    }

    test()
  }, [])

  return (
    <WrapperCardLogin>
      <WrapperLogo>
        <Image alt="pub-logo" src={pubLogo} />
      </WrapperLogo>

      <InputText name="email" onChange={handleChangeAccess} placeholder='E-mail' value={access.email}/>
      <InputText name="password" onChange={handleChangeAccess} placeholder='Senha' value={access.password}/>

      <Button onClick={() => onSubmit()}>Entrar</Button>
      <Button onClick={() => router.push('/forget')}>Esqueci minha senha</Button>
    </WrapperCardLogin>
  )
}

export default Home