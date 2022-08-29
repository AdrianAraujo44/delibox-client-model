import styled from "styled-components";
import { Form as Unform } from '@unform/web'

export const Container = styled.div`
  padding: 20px;

  header{
    padding: 30px 0px;
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  h1 {
    /* text-align: center; */
    font-size: 18px;
    margin-top: 20px;
  }
`

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    height:50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.main};
    border: none;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  textarea {
    height: 100px;
  }
`