import React, { useState, useEffect } from 'react';

export default function Rich({
  data,
  seTimeOut,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(null);

  // Create current question
  useEffect(() => {
    // call the first element of data array
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
  };

  return (
    <div className='rich'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((a) => (
          <div
            className={setSelectedAnswer === a ? className : 'answer'}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
