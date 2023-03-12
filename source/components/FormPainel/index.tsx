import app from "@/source/config/app"
import { IPainel } from "@/source/repository/PainelsRepository"
import { _errors } from "@/source/utils/errorsValidate"
import { WrapperForm } from "@/styles/globalStyles"
import { Select, Typography } from "antd"
import { useEffect, useState } from "react"
import ErrorsRender from "../ErrorsRender"
import InputText from "../InputText"
import UriInput from "../UriInput"
import { WrapperSelectId } from "./styles"

const FormPainel = ({ form, values, onChange, errors }: { form: any, values?: IPainel, onChange: any, errors: _errors }) => {
  const [optionsPainels, setOptionsPainels] = useState<Array<{ label: string, value: string }>>([{ value: '', label: '' }])
  const [loading, setLoading] = useState<boolean>(true)
  const [showTitleInput, setShowTitleInput] = useState<boolean>(false)

  useEffect(() => {
    const getPainelsName = async () => {
      setLoading(true)
      try {
        const response = await app.get('/painels-names')

        const filterInUse = ({ inUse }: { id: number, name: string, inUse: number }) => !Boolean(inUse)

        const mapValues = ({ id }: { id: number, name: string, inUse: number }) => ({ value: String(id), label: String(id) })

        const formatedValues = response.data.data.filter(filterInUse).map(mapValues)

        setOptionsPainels(formatedValues)
      } catch (err: any) {
        console.log(err?.message)
      }
      setLoading(false)
    }

    getPainelsName()

  }, [])

  return ( 
    <WrapperForm>
      { !loading &&
        <ErrorsRender errors={errors} name='painelId'>
          <WrapperSelectId>
            <Typography.Text>ID do Painel:</Typography.Text>
            <Select
              showSearch
              placeholder="Selecione o Painel"
              optionFilterProp="children"
              filterOption={(input: any, option: any) => (option?.label ?? '').includes(input)}
              options={optionsPainels}
              onChange={(value: string) => {
                setShowTitleInput(true)
                onChange({ painelId: Number(value) })
              }}
              value={String(values?.painelId ?? '')}
            />
          </WrapperSelectId>
        </ErrorsRender>
      }
      { showTitleInput &&
        <ErrorsRender errors={errors} name="painelName">
          <InputText placeholder="Título do painel" name="painelTitle" onChange={onChange} value={values?.painelTitle ?? ''} />
        </ErrorsRender>
      }
      <UriInput form={form} values={values?.uri ?? ''} />
    </WrapperForm>
  )
}

export default FormPainel