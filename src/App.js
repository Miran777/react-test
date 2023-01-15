import React, { useState } from 'react';
import './index.css';
import { Start } from './components/start';
import { Questions } from './components/questions';
import { Result } from './components/result';
import store from './state/store';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  
  
  let [answer, setAnswer] = useState(0)
  let [flag, setFlag] = useState(0)
  let [result, setResult] = useState(0)

  const [timeLeft, setTimeleft] = useState(4*60)
  const [isCounting, setIsCounting] = useState(false)

  const handleStart = () => {
    setIsCounting(true)
}
  const handleEnd = () => {
    setIsCounting(false)
    setTimeleft(4*60)
}


  const getAnswer = (event) => {
    if (event.target.value === 'yes') {
      if (flag === 0) {
        setAnswer(answer + 1)
        setFlag(flag + 1)
      } else {
        setAnswer(answer)
      }
    } else {
      if (flag !== 0) {
        setAnswer(answer - 1)
        setFlag(flag - 1)
      } else {
        setAnswer(setAnswer)
      }
    }
  }


  const getReset = () => {
    setAnswer(0)
    setFlag(0)
    setResult(result + answer)
  }

  const getResult = () => {
    handleEnd()
    setAnswer(0)
    setFlag(0)
    setResult(0)
  }

  let questionsArray = store.questions.map((elem, index) =>   
  <Route  path={elem.path} element={
    <Questions 
    questionNumber = {elem.questionNumber}
    question = {elem.question}
    var1 = {elem.var1}
    var2 = {elem.var2}
    var3 = {elem.var3}
    var4 = {elem.var4}
    value1 = {elem.value1}
    value2 = {elem.value2}
    value3 = {elem.value3}
    value4 = {elem.value4}
    path = {elem.path}
    link = {elem.link}
    next = {elem.next}
    image = {elem.image}
    index = {index}
    getReset = {getReset}
    getAnswer = {getAnswer}
    timeLeft = {timeLeft}
    setTimeleft = {setTimeleft}
    isCounting = {isCounting}
    setIsCounting = {setIsCounting}
  />
  }/>
  )

  return (
    <>
  <div className="App">
      <Routes>
        <Route path='/' element={<Start handleStart = {handleStart}/>} />
        <Route path='/result' element={<Result timeLeft={timeLeft} getResult = {getResult} result = {result} />}/>
        {questionsArray}
      </Routes>
  </div>
    </>
  );
}


export default App;
