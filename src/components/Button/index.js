import linkedin from "./linkedin.svg"
import { ButtonContainerOperador, ButtonContainerNumero, ButtonContainerZero, ButtonContainerCinza } from "./styles";

const Button = ({numero, onClick, Tipo, src}) => {
  if (numero === "0") {
    return (
      <ButtonContainerZero onClick={onClick}>
        <span>{numero}</span>
      </ButtonContainerZero>
    );
  }
  else if (Tipo === "Numero") {
    if (src) {
      return (
        <ButtonContainerOperador onClick={onClick}>
          <img src={linkedin} alt={numero} width={"50px"}/>
        </ButtonContainerOperador>
      );
    } 
    else {
    return (
      <ButtonContainerOperador onClick={onClick}>
        <span>{numero}</span>
      </ButtonContainerOperador>
    );
    }

  } else if (Tipo === "Cinza") {
    return (
      <ButtonContainerCinza onClick={onClick}>
        <span>{numero}</span>
      </ButtonContainerCinza>
    );
  }
  return (
    <ButtonContainerNumero onClick={onClick}>
      <span>{numero}</span>
    </ButtonContainerNumero>
  );
}

export default Button;
  