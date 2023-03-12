import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";

const FormList = ({ name, children }: { name: string, children: any }) => {
  return (
    <Form.List
      name={name}
      rules={[
        {
          validator: async (_, names) => {
            if (!names || names.length < 2) {
              return Promise.reject(new Error('At least 2 passengers'));
            }
          },
        },
      ]}
    >
      {(fields, { add, remove }, { errors }) => (
        <>
          {fields.map((field, index) => (
            <>
              { children }
              <MinusCircleOutlined
                className="dynamic-delete-button"
                onClick={() => remove(field.name)}
              />
            </>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              style={{ width: '60%' }}
              icon={<PlusOutlined />}
            />
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      )}
    </Form.List>
  )
}

export default FormList