import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.palette.zinc[100]};
  margin: 10px 0px 10px 0px;
  padding-bottom: 10px;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 18px;
      color: ${props => props.theme.colors.palette.zinc[900]}
    }

    label {
      color: ${props => props.theme.colors.palette.zinc[400]};
    }
  }

  button {
    background-color: transparent;
    border: none;
  }
`

export const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;

  span {
    font-size: 18px;
    color: #000;
  }

  button {
    border: none;
    width: 30px;
    height: 30px;
    background-color: ${props => props.theme.colors.palette.zinc[100]};
    border-radius: 50%;
  }
`