import React, { useState } from 'react';
import './app.css';
import Rich from './components/Rich';
import { moneyPyramid } from './moneyPiramid';
import { data } from './data';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  return (
    <div className='app'>
      <div className='main'>
        <div className='top'>
          <div className='timer'>30</div>
        </div>
        <div className='bottom'>
          <Rich
            data={data}
            setTimeOut={setTimeOut}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
      </div>
      <div className='pyramid'>
        <ul className='moneyList'>
          {moneyPyramid.map((item) => (
            <li
              className={
                questionNumber === item.id
                  ? 'moneyListItem active'
                  : 'moneyListItem'
              }
            >
              <span className='moneyListItemNumber'>{item.id}</span>
              <span className='moneyListItemAmount'>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
