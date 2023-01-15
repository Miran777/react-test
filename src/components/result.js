import React from "react";
import {Link} from 'react-router-dom';
import store from "../state/store";
export const Result = (props) => {
  let resultTime = 4 * 60 - props.timeLeft
  const minutes = Math.floor(resultTime / 60)
  const seconds = (resultTime - minutes * 60)

    return (
        <div className='test-result'>
        <h2 className='result-title'>Правильных ответов:</h2>
        <div className='result-count'>{`${props.result || '0'} из ${store.questions.length}`}</div>
        <p>Вы решили тест за {minutes ? `${minutes} минут и` : ''} {seconds} {seconds % 10 == 2 || seconds % 10 == 3 || seconds % 10 == 4 ? 'секунды!' : 'секунд'}</p>
        <Link to='/'><input 
        onClick={props.getResult}
        className='result-button' type='button' value='Попробовать сначала'/></Link>
      </div>
    )
}