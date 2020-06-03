
import React, { Component } from 'react'
import './App.css';
import quizService from './quizService/index'

class App extends Component {
  state={
    questionsBank:[]
  }


  getQuestions =()=>{
    quizService().then((questions)=>{
      this.setState({
        questionsBank: questions
      })
    })
  }
  componentDidMount(){
    this.getQuestions()
  }

  
  render() {
    return (
      <div className="container">
         <div className="title">Quizbee App</div>
         {this.state.questionsBank.length>0 && this.state.questionsBank.map((question,answers,correct,questionId)=>
           <h4>{question}</h4>
         )}
      </div>
    )
  }
}

export default App;


