import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

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

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border: none;
    width: 100%;
    height: 80px;
    gap: 20px;
    position: fixed;
    right: 0px;
    bottom: 0px;
    border-top: 1px solid ${props => props.theme.colors.palette.zinc[300]};
  
    .missing {
      color: ${props => props.theme.colors.palette.rose[500]};
      font-weight: bold;
    }
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
`

export const Button = styled.button`
  width: 100%;
  max-width: 240px;
  height: 50px;
  padding: 15px;
  background-color: ${props => props.theme.colors.main};
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border: none;
  transition: 0.3s;
  border-radius: 6px;

  :hover {
    background-color: ${props => props.theme.colors.palette.esmerald[600]};
  }

`

export const ComplementList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  margin-top: 40px;
  gap: 50px;

  .title {
    display: flex;
    align-items: center;
    gap: 20px;

    .badge {
      background-color: ${props => props.theme.colors.palette.zinc[500]};
      padding: 5px;
      border-radius: 6px;
      color: #fff;
      font-size: 12px;
    }
  }

  h2 {
    font-size: 20px;
    color: ${props => props.theme.colors.palette.zinc[900]};
    font-weight: bold;
  }

  span {
    color: ${props => props.theme.colors.palette.zinc[500]};
    font-size: 16px;
  }

  .box {
    height: 60px;
    input {
      width: 30px;
      height: 30px;
      margin-top: 30px;
    }
    label {
      font-size: 18px;
    }

    span {
      font-size: 18px;
    }
  }
`