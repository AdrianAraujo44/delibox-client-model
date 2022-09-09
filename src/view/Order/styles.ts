import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h1 {
    text-align: center;
    font-size: 18px;
    margin: 20px 0px;
  }

  h2 {
    text-align: start;
    font-size: 16px;
    margin-top: 20px;
    color: ${props => props.theme.colors.palette.zinc[400]};
    display: flex;
    align-items: center;
    gap: 5px;
  }

  p {
    text-align: justify;
    margin-top: 5px;
    margin-bottom: 15px ;
  }
`

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  height: auto;

  .orderCanceledText {
    text-align: center;
  }
`

export const ProgressItem = styled.div<{passed: boolean}>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.palette.zinc[500]};
  }

  :first-child {
    .box .ball {
      ::before {
        content: none;
      }
    }
  }


  .box {
    display: flex;
    gap: 10px;
  }

  .ball {
    width: 20px;
    height: 20px;
    background-color: ${props => props.passed == true ?  props.theme.colors.main : props.theme.colors.palette.zinc[300]};
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    align-items: center;

    ::before {
      content: "";
      width: 3px;
      height: 30px;
      margin-top: -20px;
      background-color: ${props => props.passed == true ?  props.theme.colors.main : props.theme.colors.palette.zinc[300]};
      position: absolute;
      z-index: -10;
    }
  }
`

export const Item = styled.div`
  border-top: 1px solid ${props => props.theme.colors.palette.zinc[200]};
  border-bottom: 1px solid ${props => props.theme.colors.palette.zinc[200]};
  padding: 15px 0px 15px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-right: 10px;
  }

`

export const Box = styled.div`
  display: flex;
  align-items: center;

  .box {
    display: flex;
    flex-direction: column;
    text-align: end;

    span {
      :nth-child(2) {
        color: ${props => props.theme.colors.main};
        font-weight: 600;
        align-items: flex-end;
      }
    }
  }
`

export const Row = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;

  span {
    color: ${props => props.theme.colors.palette.zinc[400]};
    
    :nth-child(2) {
      color: #000;
    }
  }

`