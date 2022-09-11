import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  header{
    padding: 10px 0px;
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      border: none;
      padding: 10px;
      background-color: transparent;
      cursor: pointer;
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 15px
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: center;
  padding: 10px;
  
  p {
    text-align: justify;
    color: ${props => props.theme.colors.palette.zinc[600]};
  }

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .missing {
      color: ${props => props.theme.colors.palette.rose[500]};
      font-weight: bold;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  max-width: 450px;
  height: 50px;
  padding: 10px;
  background-color: ${props => props.theme.colors.main};
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  transition: 0.3s;
  border-radius: 6px;

  :hover {
    background-color: ${props => props.theme.colors.palette.esmerald[600]};
  }
`