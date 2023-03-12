import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Space } from "antd"
import { useState } from "react"
import { WrapperUriInput } from "./styles"

const cardStyle = {
  backgroundColor: 'rgba(100, 100, 100, 0.1)',
  padding: '56px 16px 16px 16px',
  borderRadius: '15px',
}
const UriInput = ({ form, values }: { form: any, values: string }) => {
  const { preDomain, preFolder, preFile } = {
    preDomain: '',
    preFile: '',
    preFolder: ''
  }

  const [domain, setDomain] = useState<string>(preDomain)
  const [folder, setFolder] = useState<string>(preFolder)
  const [file, setFile] = useState<string>(preFile)

  return (
    <>
      <Form
        form={form}
        name="dynamic_form_nest_item"
        autoComplete="off"
        style={{ marginBottom: 5 }}
      >
        <Form.List name='urls'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ width: '100%', display: 'flex', marginBottom: 5, ...cardStyle, padding: 7 }} align="center">
                  <Space  key={key} style={{ width: '100%', display: 'flex', flexDirection: 'column' }} align='baseline'>
                    <Space key={key} style={{ width: '100%',  display: 'flex' }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'title']}
                        style={{width: '100%'}}
                      >
                          <Input placeholder="Título" />
                      </Form.Item>
                      <Form.Item
                          {...restField}
                          name={[name, 'orderExp']}
                          style={{width: '100%'}}
                        >
                          <Input placeholder="Ordem" />
                      </Form.Item>
                    </Space>
                    <Space key={key} style={{ display: 'flex' }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'domain']}
                        style={{width: '100%'}}
                      >
                        <Input placeholder="Dominío" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'folder']}
                        style={{width: '100%'}}
                      >
                        <Input placeholder="Pasta" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'file']}
                        style={{width: '100%'}}
                      >
                        <Input placeholder="Arquivo" />
                      </Form.Item>
                    </Space>
                  </Space>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Adicionar contéudo
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </>
  )
}

export default UriInput