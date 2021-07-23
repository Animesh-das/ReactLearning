import styled from "styled-components";

const FormInput = styled.div`
  display: inline-block;
  width: 32%;

  & input {
    height: 22px;
    width: 175px;
    background-color: ${(props) => (props.inValid ? "red" : "#fff")};
  }

  & span {
    margin-right: 5px;
    font-weight: 500;
  }
`;
export default FormInput;
