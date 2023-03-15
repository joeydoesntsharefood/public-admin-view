import styled from "styled-components";

export const WrapperControlUser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 0px 10px 0px 10px;

  button {
    background: transparent;
    padding: 5px;
    border: white 1px solid;
    border-radius: 5px;
    :hover{
      border: white 1px solid;
      cursor: pointer;
      span {
        color: white;
      }
    }
  }

  span {
    font-size: 25px;
    color: white;
    margin: 5px;
  }
  label {
    font-size: 18px;
    color: white;
  }
`