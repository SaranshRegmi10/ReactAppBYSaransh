import React, { useState } from 'react';
import './Calculator.css'; 

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleCompute = () => {
    let computedResult;
    switch (operation) {
      case 'add':
        computedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtract':
        computedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiply':
        computedResult = parseFloat(num1) * parseFloat(num2);
        break;
      default:
        computedResult = null;
    }
    setResult(computedResult);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <div className="container">
      <div className='form-container'>
      <h2>Calculator</h2>
        <label for="num1">Number 1:</label>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        
        <label for="num2">Number 2:</label>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        
        <label for="operation">Operation:</label>
        <select id='operation' value={operation} onChange={handleOperationChange}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
        </select> 
        <button onClick={handleCompute}>Compute</button>
      {result !== null && <p className='result'>Result: {result}</p>}
      </div>
    </div>
  );
}

export default Calculator;