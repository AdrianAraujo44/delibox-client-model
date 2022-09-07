import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  
  header{
    padding: 30px 0px;
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
  }
`

export const Hour = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 18px;
    margin: 10px 0px 20px 0px;
  }

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
 }
`