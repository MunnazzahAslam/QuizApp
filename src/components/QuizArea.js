import React from 'react'
import Question from './Question.js';
import AnswerList from './AnswerList.js';
import UserOp from './UserOp.js';
import Correct from './Correct.js';
import Incorrect from './Incorrect.js';

function QuizArea(props) {
    if(props.isFinished){
        if(props.correct >=2){
        return <Correct />
        }
        else{
        return <Incorrect />
        }
    }
    else
    {
    return (
        <div>
            <Question dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>
        </div>
    )
    }
}

export default QuizArea;
