import React from "react";
import {Link} from 'react-router-dom';


export const Start = (props) => {
    return (
        <div className='test-start'>
              <h1 className='test-title'>Школьные вопросы</h1>
          <Link to='/1'><input
          onClick={props.handleStart} 
          className='start-button' type='button' value='Начать тест'></input></Link>
      </div>
    )
}