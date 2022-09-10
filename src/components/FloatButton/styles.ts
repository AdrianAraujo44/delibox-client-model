import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.theme.colors.main};
  border: none;
  width: 100%;
  height: 60px;
  position: fixed;
  right: 0px;
  bottom: 0px;

  box-shadow: 2px 2px 10px ${props => props.theme.colors.palette.zinc[400]};
  transition: 0.3s;

  :hover {
    background-color: ${props => props.theme.colors.palette.esmerald[400]};
    cursor: pointer;
  }

  strong {
    background-color: red;
    width: 18px;
    height: 18px;
    border-radius: 15px;
    position: absolute;
    margin-top: -5px;
    margin-left: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  span {
    font-size: 18px;
    color: #fff;
  }
`