import React from 'react';
import TotalCorrect from './TotalCorrect.js';
import TotalIncorrect from './TotalIncorrect.js';

function ScoreArea(props) {
    return (
        <div className="scoreArea">
            <TotalCorrect correct={props.correct}/>
            <TotalIncorrect incorrect={props.incorrect}/>
        </div>
    )
}

export default ScoreArea;
