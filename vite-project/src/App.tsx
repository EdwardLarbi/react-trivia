import { useState } from 'react'
import './App.css'
import Button from './components/Button'


let score = 0;

let trivia = [
  {
    question : "Which studio produced The Avengers?",
    answer: "Marvel Studio"
  },
  {
    question : "In which country was The Avengers film produced?",
    answer : "United States"
  },
  {
    question : "Who are the main protagonists of The Avengers film?",
    answer : "Superheroes"
  },
  {
    question : "In which month of 2012 was The Avengers film released?",
    answer : "May"
  },
  {
    question : "What is the genre of The Avengers?",
    answer : "Science fiction"
  },
  {
    question : "What is the name of Toni Stark's romantic interest in The Avengers?",
    answer : "Pepper Potts"
  },
  {
    question : "What caused the transformation of The Hulk into his superhero form?",
    answer : "Gamma radiation"
  },
  {
    question : "Which city is the target of invasion in The Avengers?",
    answer : "New York"
  },
  {
    question : " In which war did Captain America fight before becoming a superhero?",
    answer : "World War II"
  },
  {
    question : "What is the relation between characters Loki and Thor in The Avengers?",
    answer : "Brothers"
  },
  {
    question : "What is the famous rallying cry of the Avengers?",
    answer : "Avengers, assemble!"
  },
  {
    question : "Which character appears in the mid-credits scene at the end of The Avengers?",
    answer : "The Other"
  },
  {
    question : "What is J.A.R.V.I.S. in the story of The Avengers?",
    answer : "AI"
  },
  {
    question : "Who wrote the story for The Avengers along with the director?",
    answer : "Zak Penn"
  },
  {
    question : "What is the name of the boss of the Avengers team?",
    answer : "Nick Fury"
  },
  {
    question : "Which Norse God inspired a character that is a member of The Avengers team?",
    answer : "Thor"
  },
  {
    question : "What color is the skin of the Hulk character in The Avengers?",
    answer : "Green"
  },
  {
    question : "What symbol does Captain America from The Avengers have on his suit?",
    answer : "Star"
  },
  {
    question : "What is the civilian name of Captain America in The Avengers?",
    answer : "Steve Rogers"
  },
  {
    question : "Which character in The Avengers is portrayed by Clark Gregg?",
    answer : "Agent Coulson"
  }
]

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  //const [response, setResponse] = useState("");

  const nextTrivia = () => {
    setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);
    questionNumber == 19 && setQuestionNumber(19);
  }

  const prevTrivia = () => {
    setQuestionNumber(prevQuestionNumber => prevQuestionNumber - 1);
    questionNumber == 0 && setQuestionNumber(0);
  }

  function answerClicked(){
    //setResponse(trivia[questionNumber].answer);
    score++;
    nextTrivia();
  }

  function failQuestion(){
    //setResponse("");
    score--;
    nextTrivia();
  }

  let answerIndex = Math.floor(Math.random() * 4);
  let possibleAnswers = [];
  for (let i = 0; i < 4; i++){
    if (i == answerIndex){possibleAnswers[i] = trivia[questionNumber].answer}
    else{possibleAnswers[i] = trivia[Math.floor(Math.random() * 20)].answer} 
  }
  return (
    <>
      <h1>Trivia Game</h1>
      <p>
          {trivia[questionNumber].question}
      </p>
      <ul>
          { 
            possibleAnswers.map(
              (x) => x === trivia[questionNumber].answer ? <li onClick={answerClicked}>{x}</li> : <li onClick={failQuestion}>{x}</li>
            ) 
          }
      </ul>
      
      
      <Button name='prev' onClick={prevTrivia}/>
      <Button name='next' onClick={nextTrivia}/>
      <div>
          <span>score: {score}</span>
      </div>
    </>
  )
}

export default App
