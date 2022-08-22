import styled from "styled-components";

export const Button = styled.button`
  padding: 10px;
  background-color: ${props => props.theme.colors.main};
  border: none;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  position: fixed;
  right: 10px;
  bottom: 15px;

  box-shadow: 2px 2px 10px ${props => props.theme.colors.palette.zinc[400]};
  transition: 0.3s;

  :hover {
    background-color: ${props => props.theme.colors.palette.esmerald[400]};
    cursor: pointer;
  }

  span {
    background-color: red;
    width: 23px;
    height: 23px;
    border-radius: 15px;
    position: absolute;
    margin-top: -15px;
    margin-left: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
`