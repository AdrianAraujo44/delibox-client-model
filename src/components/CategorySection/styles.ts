import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-radius: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  gap: 10px;

  h1 {
    text-align: left;
  }
`

export const Item = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.colors.palette.zinc[100]};
  justify-content: space-between;
  border-radius: 10px;
  padding-left: 10px;
  transition: 0.3s ease;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.palette.zinc[200]};
  }
`

export const Box = styled.div`
  display: flex;

  img {
    border-radius: 10px;
    width: 60px;
    height: 60px;
    margin: 10px 7px 10px 0px;

  }

  button {
    height: 100%;
    background-color: ${props => props.theme.colors.palette.rose[400]};
    border: none;
    border-radius: 0px 10px 10px 0px;
    width: 50px;
    cursor: pointer;
    transition: 0.3s ease;

    :hover {
      background-color: ${props => props.theme.colors.palette.rose[500]};
    }
  }
`

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 16px;
    :nth-child(1) {
      margin-top: 10px;
    }

    :nth-child(2) {
      font-weight: 200;
      color: ${props => props.theme.colors.palette.zinc[500]};
    }
  }

  strong {
    font-size: 18px;
    color: ${props => props.theme.colors.palette.zinc[500]};
    margin-top: 5px;
  }
`