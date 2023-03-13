import ControllUser from "@/source/components/ControllUser";
import SelectContent from "@/source/components/SelectContent";
import { WrapperDashBoard, WrapperLogoDashBoard, WrapperTitleDashBoard } from "@/styles/dashboard"
import { UserOutlined } from "@ant-design/icons";
import { CalendarOutlined, PrinterOutlined, VideoCameraOutlined } from "@ant-design/icons/lib/icons";
import { Menu } from "antd"
import Layout, { Content, Footer } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import Image from "next/image";
import { createElement, useEffect, useState } from "react";
import logoWhite from '../../assests/pub-logo-white.png'

const Home = () => {
  const [sizeHeight, setSizeHeight] = useState<{ windowHeight: any }>({ windowHeight: window.innerHeight })
  const [contentSelect, setContentSelect] = useState<string>('user')
  const titles: any = {
    user: 'Usuários',
    schedule: 'Agenda',
    urls: 'Urls',
    reports: 'Relatórios',
    dev: 'Dev'
  }

  const handleResize = (e: any) => {
    setSizeHeight({windowHeight: window.innerHeight})
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <WrapperDashBoard>
      <Layout className="dashboard" style={{ minHeight: sizeHeight as any }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <WrapperLogoDashBoard>
            <Image alt='pub-logo' src={logoWhite} />
          </WrapperLogoDashBoard>
          <ControllUser />
          <Menu
            onClick={(value) => setContentSelect(value.key)}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['contentSelect']}
            items={[{
              icon: UserOutlined,
              label: 'Usuários',
              key: 'user'
            },
            {
              icon: CalendarOutlined,
              label: 'Agenda',
              key: 'schedule'
            },
            {
              icon: VideoCameraOutlined,
              label: 'Contéudo',
              key: 'urls'
            },
            {
              icon: PrinterOutlined,
              label: 'Relatórios',
              key: 'reports'
            },
            {
              icon: PrinterOutlined,
              label: 'Dev',
              key: 'dev'
            }
          ].map(
              (value, index) => ({
                key: value.key,
                icon: createElement(value.icon as any),
                label: value.label,
              }),
            )}
          />
        </Sider>
        <Layout>
          <Content className='content'>
            <WrapperTitleDashBoard>
              {titles[contentSelect]}
            </WrapperTitleDashBoard>
            <SelectContent render={contentSelect} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
      
    </WrapperDashBoard>
  )
}

export default Home