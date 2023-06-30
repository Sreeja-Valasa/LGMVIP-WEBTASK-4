import React, { useState } from 'react';
import './Calculator.css';
import math from 'mathjs';

const Calculator = () => {
  const [result, setResult] = useState('');

  const appendToResult = value => {
    setResult(prevResult => prevResult + value);
  };

  const clearResult = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      const calculatedResult = evaluateExpression(result);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const evaluateExpression = expression => {
    let sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    if (sanitizedExpression.includes('--')) {
      sanitizedExpression = sanitizedExpression.replace(/--/g, '+');
    }
    return math.evaluate(sanitizedExpression);
  };

  return (
    <div className="calculator">
      <input type="text" value={result} disabled />
      <button onClick={clearResult}>C</button>
      <button onClick={() => appendToResult('7')}>7</button>
      <button onClick={() => appendToResult('8')}>8</button>
      <button onClick={() => appendToResult('9')}>9</button>
      <button onClick={() => appendToResult('4')}>4</button>
      <button onClick={() => appendToResult('5')}>5</button>
      <button onClick={() => appendToResult('6')}>6</button>
      <button onClick={() => appendToResult('1')}>1</button>
      <button onClick={() => appendToResult('2')}>2</button>
      <button onClick={() => appendToResult('3')}>3</button>
      <button onClick={() => appendToResult('0')}>0</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => appendToResult('+')}>+</button>
      <button onClick={() => appendToResult('-')}>-</button>
      <button onClick={() => appendToResult('*')}>*</button>
      <button onClick={() => appendToResult('/')}>/</button>
    </div>
  );
};

export default Calculator;
