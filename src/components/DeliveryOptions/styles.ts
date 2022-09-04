import styled from "styled-components";

export const Options = styled.div`
h3 {
  color: ${props => props.theme.colors.palette.zinc[500]};
  font-size: 16px;
  font-weight: 400;
}
.box {
  display: flex;
}

.optionItem {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  input {
    width: 30px;
    height: 30px;
  }
}

.optionText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;

  span {
    color: #807D7D;
  }
}
`