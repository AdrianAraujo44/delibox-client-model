import styled from "styled-components";

export const Item = styled.div`
  border-top: 1px solid ${props => props.theme.colors.palette.zinc[200]};
  border-bottom: 1px solid ${props => props.theme.colors.palette.zinc[200]};
  padding: 15px 0px 10px 0px;

  img {
    width: 75px;
    height: 75px;
    border-radius: 10px;
    padding-right: 5px;
  }

  .remove{
    display: flex;
    width: auto;
    font-weight: 400;
    justify-content: flex-end;
    color: ${props => props.theme.colors.palette.rose[700]};
    font-size: 16px;
  }

  .complements {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: ${props => props.theme.colors.palette.zinc[500]};
    margin-top: 10px;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  .box {
    display: flex;
    flex-direction: column;

    span {
      :nth-child(2) {
        color: ${props => props.theme.colors.main};
        font-weight: 600;
      }
    }
  }

`

export const Content = styled.div`
  display: flex;
  gap: 5px;
`