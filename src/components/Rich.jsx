import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import play from '../sounds/play.mp3';
import correct from '../sounds/correct.mp3';
import wrong from '../sounds/wrong.mp3';

export default function Rich({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  // Create current question
  useEffect(() => {
    // call the first element of data array
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName('answer active');

    delay(2000, () => {
      setClassName(a.correct ? 'answer correct' : 'answer wrong');
    });

    delay(3000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer()
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className='rich'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : 'answer'}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}