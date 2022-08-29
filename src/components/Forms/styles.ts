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