import { useState } from 'react';
import './Calculator.css';

const calculate = (expression) => {
  try {
    return new Function(`return ${expression}`)();
  } catch {
    return "Error";
  }
};

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => setExpression((prev) => prev + value);

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleCalculate = () => setResult(calculate(expression));

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={expression} readOnly />
        <input type="text" value={result} readOnly />
      </div>
      <div className="buttons">
        {["7", "8", "9", "*", "4", "5", "6", "/", "1", "2", "3", "-", ".", "0", "+"].map((char) => (
          <button key={char} onClick={() => handleInput(char)}>
            {char}
          </button>
        ))}
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
