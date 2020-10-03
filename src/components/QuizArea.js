import React from 'react'
import Question from './Question.js';
import AnswerList from './AnswerList.js';
import UserOp from './UserOp.js';

function QuizArea(props) {
    if(props.isFinished){
        return <UserOp/>
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
