import Input from './components/Input';  // Importa o componente de entrada (display da calculadora)
import Button from './components/Button';  // Importa o componente de botão da calculadora

import { Container, Content, Row } from './styles';  // Importa componentes estilizados
import { useState } from 'react';  // Importa o hook useState do React para gerenciar o estado


const App = () => {
  // Estado para o número atual exibido
  const [currentNumber, setCurrentNumber] = useState('0');
  // Estado para armazenar o primeiro número de uma operação
  const [firstNumber, setFirstNumber] = useState('0');
  // Estado para armazenar o tipo de operação selecionada
  const [operation, setOperation] = useState('');

  // Função para limpar a tela e resetar os estados
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  // Função para limpar a entrada atual (CE)
  const handleClearEntry = () => {
    setCurrentNumber('0');
  };

  // Função para calcular a porcentagem
  const handlePercent = () => {
    if (firstNumber !== '0') {
      const percentage = (Number(firstNumber) * Number(currentNumber)) / 100;
      setCurrentNumber(String(percentage));
    }
  };

  // Função para adicionar número ao display atual
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  // Função para realizar uma operação de adição
  const handleSumNumbers = () => {
    if (firstNumber === '0') {  // Verifica se é o primeiro número da operação
        setFirstNumber(String(currentNumber));  // Armazena o número atual como primeiro número
        setCurrentNumber('0');  // Reseta o número atual
        setOperation('+');  // Define a operação como adição
    } else {  // Se já houver um primeiro número, realiza a operação
      const sum = Number(firstNumber) + Number(currentNumber);  // Soma os números
      setCurrentNumber(String(sum));  // Atualiza o display com o resultado
      setOperation('');  // Reseta a operação
    }
  }

  // Função para realizar uma operação de subtração
  const handleMinusNumbers = () => {
    if (firstNumber === '0') {  // Verifica se é o primeiro número da operação
        setFirstNumber(String(currentNumber));  // Armazena o número atual como primeiro número
        setCurrentNumber('0');  // Reseta o número atual
        setOperation('-');  // Define a operação como subtração
    } else {  // Se já houver um primeiro número, realiza a operação
      const difference = Number(firstNumber) - Number(currentNumber);  // Subtrai os números
      setCurrentNumber(String(difference));  // Atualiza o display com o resultado
      setOperation('');  // Reseta a operação
    }
  }

  // Função para realizar uma operação de multiplicação
  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {  // Verifica se é o primeiro número da operação
        setFirstNumber(String(currentNumber));  // Armazena o número atual como primeiro número
        setCurrentNumber('0');  // Reseta o número atual
        setOperation('*');  // Define a operação como multiplicação
    } else {  // Se já houver um primeiro número, realiza a operação
      const product = Number(firstNumber) * Number(currentNumber);  // Multiplica os números
      setCurrentNumber(String(product));  // Atualiza o display com o resultado
      setOperation('');  // Reseta a operação
    }
  }

  // Função para realizar uma operação de divisão
  const handleDivideNumbers = () => {
    if (firstNumber === '0') {  // Verifica se é o primeiro número da operação
        setFirstNumber(String(currentNumber));  // Armazena o número atual como primeiro número
        setCurrentNumber('0');  // Reseta o número atual
        setOperation('/');  // Define a operação como divisão
    } else {  // Se já houver um primeiro número, realiza a operação
      if (currentNumber !== '0') {  // Verifica para evitar divisão por zero
        const quotient = Number(firstNumber) / Number(currentNumber);  // Divide os números
        setCurrentNumber(String(quotient));  // Atualiza o display com o resultado
        setOperation('');  // Reseta a operação
      } else {
        setCurrentNumber("Erro");  // Exibe "Erro" no display se houver divisão por zero
      }
    }
  }

  // Função para exibir o resultado da operação
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        // Verifica a operação armazenada e executa a função correspondente
        switch(operation) {
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultiplyNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          default: 
            break;
        }
    }
  }

  return (
    <Container>
      <Content>
        {/* Display para exibir o número atual */}
        <Input value={currentNumber}/>
        
        {/* Linha de botões com operações e comandos */}
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers}/>  {/* Botão de multiplicação */}
          <Button label="/" onClick={handleDivideNumbers}/>  {/* Botão de divisão */}
          <Button label="c" onClick={handleOnClear}/>  {/* Botão para limpar a tela */}
          <Button label="."/>  {/* Botão para ponto decimal, não implementado */}
        </Row>
        
        {/* Linha de botões para números e operação de subtração */}
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        
        {/* Linha de botões para números e operação de adição */}
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        
        {/* Linha de botões para números e operação de igual */}
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>  {/* Botão para exibir o resultado */}
        </Row>
        <Row>
        <Button label="0" onClick={() => handleAddNumber('0')}/>  {/* Botão para o número zero */}
          <Button label="," onClick={() => handleAddNumber(',')}/>
          <Button label="CE" onClick={handleClearEntry}/>  {/* Botão CE para limpar a entrada */}
          <Button label="%" onClick={handlePercent}/>  {/* Botão % para porcentagem */}
          
        </Row>
      </Content>
    </Container>
  );
}

export default App;  // Exporta o componente App como padrão
