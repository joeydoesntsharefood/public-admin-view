import { _errors } from "@/source/utils/errorsValidate"
import { Typography } from "antd"
import { useEffect, useState } from "react"
import { WrapperError } from "./styles"

const { Text } = Typography

const ErrorsRender = ({ children, errors, name }: { children: any, errors: _errors, name: string }) => {
  const [errorLabel, setErrorLabel] = useState<string>()

  useEffect(() => {
    setErrorLabel(undefined)
    if (errors) {
      errors.forEach(({ key, message }) => {
        if (key === name) setErrorLabel(message)
      })
    }

    console.log(errors)

  }, [errors, name])

  return (
    <WrapperError>
      { children }
      <Text type="danger">{errorLabel}</Text>
    </WrapperError>
  )
}

export default ErrorsRender