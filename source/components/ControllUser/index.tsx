import { defaultUserValue, userState } from "@/source/recoil"
import { UserOutlined } from "@ant-design/icons"
import { Dropdown, MenuProps } from "antd"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { WrapperControlUser } from "./styles"

const ControllUser = () => {
  const [user] = useRecoilState(userState)
  const router = useRouter()

  const logout = () => {
    router.push('/')
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a onClick={logout}>
          Sair
        </a>
      ),
    }
  ]
  
  return (
    <WrapperControlUser>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <button>
          <UserOutlined />
        </button>
      </Dropdown>
      <label>{`${user.name} ${user.lastName}`}</label>
    </WrapperControlUser>
  )
}

export default ControllUser