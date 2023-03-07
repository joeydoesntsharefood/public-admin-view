import styled from "styled-components";

export const WrapperButton = styled.div`
  margin: 20px;
  outline: none;
  .custom-btn {
    width: 100%;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #000;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }
  .btn {
    line-height: 39px;
    padding: 0;
  }
  .btn:hover{
    background: transparent;
    color: #000;
  }
  .btn span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  .btn:before,
  .btn:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #000;
    transition: all 0.3s ease;
  }
  .btn:before {
    height: 0%;
    width: 2px;
  }
  .btn:after {
    width: 0%;
    height: 2px;
  }
  .btn:hover:before {
    height: 100%;
  }
  .btn:hover:after {
    width: 100%;
  }
  .btn span:before,
  .btn span:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #000;
    transition: all 0.3s ease;
  }
  .btn span:before {
    width: 2px;
    height: 0%;
  }
  .btn span:after {
    width: 0%;
    height: 2px;
  }
  .btn span:hover:before {
    height: 100%;
  }
  .btn span:hover:after {
    width: 100%;
  }
`