import React, { useState } from 'react';
import calculate from '../logic/calculate';
import btnValues from './btnNames';
import '../App.css';

const Calculator = () => {
  const [calcObject, setCalcObject] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    try {
      setCalcObject({ ...calcObject, ...calculate(calcObject, e.target.textContent) });
    } catch (error) {
      return calcObject;
    }
    return 0;
  };

  const { next, total } = calcObject;
  const btnClass = (i) => ((((i + 1) % 4 === 0) || i === 20) ? 'orange-like-btn' : 'gray-like-btn');

  return (
    <div className="container">
      <div className="calc-display">{next || total || 0}</div>
      {btnValues.map((name, i) => (
        <button key={i.toString()} type="button" onClick={handleClick} className={btnClass(i)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
