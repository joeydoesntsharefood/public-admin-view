import InputText from "@/source/components/InputText"
import app from "@/source/config/app"
import { Button, InputNumber } from "antd"
import Typography from "antd/es/typography/Typography"
import { useState } from "react"

const Dev = () => {
  const [amount, setAmount] = useState<number>(0)

  const createPainels = async () => {
    let painelList: Array<string> = []

    for (let i = 0; i <= amount; i++) {
      painelList.push(`${i}`)
    }

    for await (let painel of painelList) {
      try {
        await app.post('/create-painels')
        console.log(`Create ${painel}`)
      } catch (err: any) {
        console.log(`Error in ${painel}, Message: ${err?.message}`)
      }
    }
  }

  return (
    <>
      <Typography>Criação de Paineis:</Typography>
      <InputNumber onChange={value => setAmount(value ?? 0)} value={amount}/>
      <Button onClick={createPainels}>Criar Paineis</Button>
    </>
  )
}

export default Dev