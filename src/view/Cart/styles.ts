import styled from "styled-components";
import { Form as Unform } from '@unform/web'

export const Container = styled.div`
  padding: 20px;
  
  header{
    padding: 10px 0px;
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
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 16px;
    color: ${props => props.theme.colors.palette.zinc[400]};
    padding-bottom: 5px
  }
`

export const PriceBox = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.palette.zinc[100]};
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  color: ${props => props.theme.colors.palette.zinc[700]};
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 3px ;

    :nth-child(2) {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom : 1px solid ${props => props.theme.colors.palette.zinc[400]}
    }
  }

  .button {
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.colors.main};
    border: none;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;
  }
`

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 40px;
  margin-bottom: 40px;

  button {
    height:45px;
    width: 60px;
    display: flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.main};
    border: none;
    border-radius: 6px;
  }

  label {
    color: ${props => props.theme.colors.palette.zinc[400]};
    font-weight: 400;
  }
`

export const SearchCep = styled.div `
  display: flex;
  gap: 5px;
  margin-top: 30px;
`