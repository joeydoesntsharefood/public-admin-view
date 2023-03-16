import PasswordInput from "@/source/components/PasswordInput"

const Fields = ({ values, onChange }:{ values: { password: string, confirmPassword: string }, onChange: (value: any) => void}) => {
  return (
    <>
      <PasswordInput name='password' onChange={onChange} placeholder='Senha' value={values?.password} />
      <PasswordInput name='confirmPassword' onChange={onChange} placeholder='Confirme sua senha' value={values?.confirmPassword} />
    </>
  )
}

export default Fields