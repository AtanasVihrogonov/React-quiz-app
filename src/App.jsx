import React, { useState, useEffect } from 'react';
import './app.css';
import Rich from './components/Rich';
import Timer from './components/Timer';
import { moneyPyramid } from './moneyPiramid';
import { data } from './data';
import { AiFillStar } from 'react-icons/ai';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('£ 0');

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className='app'>
      <div className='main'>
        {stop ? (
          <div className='endText'>
            <h1>Congratulations! </h1>
            <h2>You earned: {earned}</h2>
          </div>
        ) : (
          <>
            <div className='top'>
              <div className='timer'>
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className='bottom'>
              <Rich
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
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
              <span className='moneyListItemStar'>
                <AiFillStar />
              </span>
              <span className='moneyListItemAmount'>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
