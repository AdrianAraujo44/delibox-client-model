import styled from "styled-components";

export const Container = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.palette.zinc[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${props => props.theme.colors.palette.zinc[300]};
  }
`