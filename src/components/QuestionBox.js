import React,{useState}from 'react'

 const QuestionBox = ({question, options,selected}) => {

  const [answer, setAnswer] = useState(options)
  return (
    <div className="questionBox"> 
      <div className="question">{question}</div>
      {answer.map((answerOption,index)=>
        <button 
        className="answerBtn"
        onClick={()=>
          {setAnswer([answerOption]);
          selected(answerOption);}}>
          {answerOption}
        
        </button>
      )}
    </div>
  )
}

export default QuestionBox;

