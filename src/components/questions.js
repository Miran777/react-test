import React from "react";
import { Link } from 'react-router-dom';
import  Timer  from "./timer";
import { useState } from "react";

export const Questions = (props) => {


    return (
          props.timeLeft > 0 ? 
          <div key={props.index} className='test-main'>
            <h2 className='question-title'><span>{props.questionNumber}: </span>{props.question}</h2>
            <div className="question-main">
              <div className="inputs">
            <div className='question-inputs'>
              <input 
              onClick={(e) => props.getAnswer(e)}
              className='question-input' type='radio' id='q1' name='q1' value={props.value1}></input>
              <label htmlFor='q1'>{props.var1}</label>
            </div>
            <div className='question-inputs'>
              <input 
              onClick={(e) => props.getAnswer(e)}
              className='question-input' type='radio' id='q2' name='q1' value={props.value2}></input>
              <label htmlFor='q2'>{props.var2}</label>
            </div>
            <div className='question-inputs'>
              <input 
              onClick={(e) => props.getAnswer(e)}
              className='question-input' type='radio' id='q3' name='q1' value={props.value3}></input>
              <label htmlFor='q3'>{props.var3}</label>
            </div>
            <div className='question-inputs'>
              <input 
              onClick={(e) => props.getAnswer(e)}
              className='question-input' type='radio' id='q4' name='q1' value={props.value4}></input>
              <label htmlFor='q4'>{props.var4}</label>
            </div>
              </div>
              <img src={props.image} alt='question-img' className='question-image'></img>
            </div>
            <Timer
              timeLeft = {props.timeLeft}
              isCounting = {props.isCounting}
              setIsCounting = {props.setIsCounting}
              setTimeleft = {props.setTimeleft}
            />
            <div className='questions-button-wrap'>
              <Link to={props.link}><input
              onClick={props.getReset}
              className='questions-button' type='button' value={props.next} /></Link>
            </div>
          </div> :
          <div className='lose-time'>
            <h2>Время вышло!</h2>
            <div className='questions-button-wrap'>
              <Link to='/result'><input
              onClick={props.getReset}
              className='questions-button' type='button' value='Перейти к результату'/>
              </Link>
            </div>
          </div>
    )
}