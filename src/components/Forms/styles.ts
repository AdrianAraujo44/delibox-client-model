import styled from "styled-components";

export const InputText = styled.div`
  input {
    width: 100%;
    border: 1px solid #CAC9C9;
    border-radius: 6px;
    height: 45px;
    padding-left: 10px;
    outline: none;
    font-size: 16px;
  }
  
  input[type="time"]::-webkit-calendar-picker-indicator {
      background: none;
  }
`

export const TextArea = styled.div`
  textarea {
    width: 100%;
    border: 1px solid #CAC9C9;
    outline: none;
    font-size: 16px;
    border-radius: 6px;
    padding: 10px;
  }
`

export const ErrorMessage = styled.span`
  display: block;
	font-size: 0.8rem;
	color: red;
`

export const RadioButton = styled.div`
  input {
    width: 20px;
    height: 20px;
    margin-top: 20px;
  }
  .box {
    display: flex;
    gap: 5px;

    .option {
      margin: 20px 0px 10px 0px;
      display: flex;
      flex-direction: column;
      span {
        color: ${props => props.theme.colors.palette.zinc[400]};
      }
    }
  }
`