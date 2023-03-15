import { IUser } from "@/source/repository/UserRepository"
import { _errors } from "@/source/utils/errorsValidate"
import { Switch } from "antd"
import DropDown from "../DropDown"
import ErrorsRender from "../ErrorsRender"
import InputText from "../InputText"
import { WrapperDropDownForm, WrapperForm, WrapperInstitution } from "./styles"

export const accessLevels: Array<{ label: string, value: string }> = [
  { label: 'Administrador BRAB', value: '0' },
  { label: 'Administrador Institucional', value: '1' },
  { label: 'Administrador Patrocinador', value: '2' },
  { label: 'Administrador Associação', value: '3' },
  { label: 'Usuário Comum', value: '4' }
]

export const institutionList: Array<{label: string, value: string}> = [
  {
  value: 'embrapa',
    label: 'Embrapa'
  },
  {
    value: 'itau',
    label: 'Itaú'
  },
]

const FormUser = ({ values, onChange, errors }: { values?: IUser, onChange: (values: {}) => void, errors: _errors }) => {
  return (
    <>
      <ErrorsRender name="name" errors={errors}>
        <InputText name="name" value={values?.name ?? ''} onChange={onChange} placeholder="Nome" />
      </ErrorsRender>
      <ErrorsRender name="lastName" errors={errors}>
        <InputText name="lastName" value={values?.lastName ?? ''} onChange={onChange} placeholder="Sobrenome" />
      </ErrorsRender>
      <ErrorsRender name="email" errors={errors}>
        <InputText name="email" value={values?.email ?? ''} onChange={onChange} placeholder="E-mail" />
      </ErrorsRender>
      <InputText name="phone" value={values?.phone ?? ''} onChange={onChange} placeholder="Telefone" />
      <WrapperDropDownForm>
        <label>Perfil:</label>
        <ErrorsRender name="accessLevel" errors={errors}>
          <DropDown name="accessLevel" value={values?.accessLevel ?? ''} onChange={onChange} options={accessLevels} />
        </ErrorsRender>
      </WrapperDropDownForm>
      { (values?.accessLevel === 'adminInstitucional') &&
        <WrapperDropDownForm>
          <label>Instituição:</label>
          <ErrorsRender name="institution" errors={errors}>
            <DropDown name="institution" value={values?.institution} onChange={onChange} options={institutionList} />
          </ErrorsRender>
        </WrapperDropDownForm>
      }
      {/* <InputText name="corp" value={values?.corp ?? ''} onChange={onChange} placeholder="Corporação" /> */}
      {/* <InputText name="corpEmail" value={values?.corpEmail ?? ''} onChange={onChange} placeholder="E-mail corporativo" /> */}
      {/* <InputText name="areaOfIntrest" value={values?.areaOfIntrest ?? ''} onChange={onChange} placeholder="Area de interesse" /> */}
      {/* <Switch checked={values?.partOf} onChange={(value) => onChange({ partOf: value ?? false })} checkedChildren={<>ok</>} unCheckedChildren={<>não</>} /> */}
      {/* <InputText name="role" value={values?.role ?? ''} onChange={onChange} placeholder="Cargo" /> */}
    </>
  )
}

export default FormUser

