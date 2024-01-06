import { InputContainer } from "./styles";

const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value} placeholder="0"/>
      </InputContainer>
    );
  }
  
  export default Input;
  