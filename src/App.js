import React, { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row, Column } from "./styles";
import linkedin from './components/Button/linkedin.svg';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  
  const handleAddNumber = (number) => {
    console.log(currentNumber);
    setCurrentNumber(prev => `${prev}${number}`);
  }

  const handleAC = () => {
    setCurrentNumber("");
  }

  const handleBackspace = () => {
    const tipo = typeof currentNumber
    if (tipo === 'number') {
      setCurrentNumber(prev => prev.toString().slice(0, -1));
      return;
    }
    setCurrentNumber(prev => prev.slice(0, -1));
  }


  const handleCalculate = () => {
    const finalNumber = currentNumber.slice(-1);
    if (finalNumber === "+" || finalNumber === "-" || finalNumber === "x" || finalNumber === "%") {
      setCurrentNumber(prev => prev.slice(0, -1));
      return;
    }
    if (currentNumber === "" || currentNumber === "+" || currentNumber === "-" || currentNumber === "x" || currentNumber === "%") {
      setCurrentNumber('') 
      return;
  
    } 
    else {
      currentNumber.includes('%') ? setCurrentNumber(prev => eval(prev.replace('%', '/100'))) :
      currentNumber.includes('x') ? setCurrentNumber(prev => eval(prev.replace('x', '*'))) :
      currentNumber.includes('÷') ? setCurrentNumber(prev => eval(prev.replace('÷', '/'))) :
      setCurrentNumber(prev => eval(prev));}
    }
    
    const handleLinkedin = () => { 
      window.open('https://www.linkedin.com/in/tiagoazevedodev/', '_blank');
    }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
          <Row>
            <Button numero="%"  Tipo="Cinza" onClick={() => handleAddNumber('%')}/>
            <Button numero="AC" Tipo="Cinza" onClick={handleAC}/>
            <Button numero="C"  Tipo="Cinza" onClick={handleAC} />
            <Button numero="←"  onClick={handleBackspace}/>
          </Row>
          <Row>
            <Button numero="7" Tipo="Numero" onClick={() => handleAddNumber('7')}/>
            <Button numero="8" Tipo="Numero" onClick={() => handleAddNumber('8')}/>
            <Button numero="9" Tipo="Numero" onClick={() => handleAddNumber('9')}/>
            <Button numero="x" onClick={() => handleAddNumber('x')}/>
          </Row>
          <Row>
            <Button numero="4" Tipo="Numero" onClick={() => handleAddNumber('4')}/>
            <Button numero="5" Tipo="Numero" onClick={() => handleAddNumber('5')}/>
            <Button numero="6" Tipo="Numero" onClick={() => handleAddNumber('6')}/>
            <Button numero="-" onClick={() => handleAddNumber('-')}/>
          </Row>
          <Row>
            <Button numero="1" Tipo="Numero" onClick={() => handleAddNumber('1')}/>
            <Button numero="2" Tipo="Numero" onClick={() => handleAddNumber('2')}/>
            <Button numero="3" Tipo="Numero" onClick={() => handleAddNumber('3')}/>
            <Button numero="+" onClick={() => handleAddNumber('+')}/>
          </Row>
          <Row>
            <Button numero="0" Tipo="Numero" onClick={() => handleAddNumber('0')}/>
            <Button numero={linkedin} src={linkedin} Tipo="Numero" onClick={handleLinkedin}/>
            <Button numero="=" onClick={handleCalculate}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
