import styled from "styled-components";

export const WrapperDashBoard = styled.div`
  .dashboard {
    min-height: 100%;
    margin: 0px;
  }
  .content {
    height: 960px;
  }
  .ant-layout-sider {
    background: black;
  }
  .ant-menu {
    background: transparent;
  }
  .ant-layout-header {
    background: grey;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0px;
  }
`

export const WrapperContent = styled.div``

export const WrapperSideBar = styled.div``

export const WrapperLogoDashBoard = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`

export const WrapperTitleDashBoard = styled.div`
  margin: 20px;
  font-size: 25px;
`