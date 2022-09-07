import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;

  .info {
    margin-top: 5px;
    color: ${props => props.theme.colors.palette.zinc[600]};
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color: transparent;

  }
`
export const Wrapper = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const Logo = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 20px;
  border: 5px solid #fff;
  margin-top: -45px;
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`