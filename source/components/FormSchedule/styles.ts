import styled from "styled-components";

export const WrapperPickers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .wrapper-date-picker {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const WrapperSelect = styled.div`
  select {
    width: 100%;
  }
`

export const WrapperSwitch = styled.div`
  width: 100%;
  height: 20px;
  button {
    
    width: 100%;
    border-radius: 0px;
    height: 20px;
    :hover {
      background: black;
    }
  }
  .ant-switch-handle {
    border-radius: 0px;
    ::before {
      border-radius: 0px;
    }
  }
  .ant-switch-inner-checked {
    background: black;
  }
  .ant-switch-checked {
    background: black;
  }

  .ant-switch-inner {
    .ant-switch-inner-checked {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }
  
    .ant-switch-inner-unchecked {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }
  }
`