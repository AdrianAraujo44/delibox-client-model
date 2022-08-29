import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  max-width: 1000px;
  gap: 10px;
`

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
  border-radius: 10px;
  padding: 10px 5px;
  transition: 0.3s ease;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.palette.zinc[100]};
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }

  strong {
    font-size : 12px;
    padding: 5px 0px 5px 0px;
  }
`