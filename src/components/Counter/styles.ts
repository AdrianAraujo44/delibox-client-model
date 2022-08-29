import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-self: center;
  justify-content: center;

  span {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  button {
    border-radius: 20px;
    border: none;
    justify-content: center;
    align-self: center;
    width: 30px;
    height: 30px;
  }
`