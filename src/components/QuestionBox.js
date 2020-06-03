import React from 'react'

export const QuestionBox = ({question, answers}) => {
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
    </div>
  )
}

