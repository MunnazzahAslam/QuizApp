import React from 'react'
import Question from './Question.js';
import AnswerList from './AnswerList.js';
import UserOp from './UserOp.js';

function QuizArea(props) {
    if(props.isFinished){
        if(props.correct >=2){
        return <correct />
        }
        else{
        return <incorrect />
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
