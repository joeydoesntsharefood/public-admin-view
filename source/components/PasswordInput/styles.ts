import styled from "styled-components";

export const WrapperPasswordInput = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 1.3rem;
    color: black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute; 
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight:700;    
    }
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image-slice: 1;
    ~ .buttons-password {
      border-width: 3px;
      border-image-slice: 1;
    }
  }
  /* reset input */
  .form__field{
    &:required,&:invalid { box-shadow:none; }
  }
`

export const WrapperButtonPassword = styled.div`
  span {
    font-size: 1.5rem;
  }
  button {
    border: 0;
    background: transparent;
    border-bottom: 2px solid gray;
    cursor: pointer;
  }
`

export const WrapperPassword = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-end;
`

export const WrapperLoading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`