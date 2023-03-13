import Button from "@/source/components/Button"
import InputText from "@/source/components/InputText"
import { defaultUserValue, userState, tokenState } from "@/source/recoil"
import AuthRepository from "@/source/repository/AuthRepository"
import { WrapperCardLogin, WrapperLogo } from "@/styles/home"
import { Modal } from "antd"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import pubLogo from '../assests/pub-logo.png'

const Home = () => {
  const [access, setAccess] = useState<{ email: string, password: string }>({ email: '', password: '' })
  const router = useRouter()
  const [user, setUser] = useRecoilState(userState)
  const [token, setToken] = useRecoilState(tokenState)

  const handleChangeAccess = (value: {}) => setAccess({ ...access, ...value })

  useEffect(() => {
    setUser(defaultUserValue)
  }, [])

  const onSubmit = async () => {
    try {
      const response = await AuthRepository.signin(access)
      if (!response?.success) throw new Error(response?.message)
      Modal.success({
        title: 'Conseguimos ',
        content: response?.message
      })
      const { userData, token } = response?.data
      setUser(userData)
      setToken(token)
      localStorage.setItem('token', token)
      router.push('/home')
    } catch (err: any) {
      Modal.error({
        title: 'Aviso',
        content: err?.message
      })
    }
  }

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