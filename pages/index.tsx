import Button from "@/source/components/Button"
import InputText from "@/source/components/InputText"
import { WrapperCardLogin, WrapperLogo } from "@/styles/home"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import pubLogo from '../assests/pub-logo.png'

const Home = () => {
  const [access, setAccess] = useState<{ email: string, password: string }>({ email: '', password: '' })
  const router = useRouter()

  const handleChangeAccess = (value: {}) => setAccess({ ...access, ...value })

  const onSubmit = async () => {
    router.push('/home')
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