import styled from "styled-components";

export const WrapperUser = styled.div`
  padding: 20px;
`

export const WrapperFilters = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: space-around;
  gap: 50px;
  #name {
    width: 300px;
  }
  .custom-btn {
    width: 200px;
  }
  
`

export const WrapperScheduleFilters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  gap: 8px;
  input[type="datetime-local"] {
    margin-left: 0px;
  }
`