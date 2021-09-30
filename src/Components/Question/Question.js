import React, {useState} from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestions, onSetActiveQuestion, activeQuestion, onSetStep}) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');



    return (
        <div>
            <h2>Question here</h2>
            <label>
                <input type="radio" name="answer" value=""/>
                Choices
            </label>
            <label>
                <input type="radio" name="answer" value=""/>
                Choices
            </label>
            <label>
                <input type="radio" name="answer" value=""/>
                Choices
            </label>
            <label>
                <input type="radio" name="answer" value=""/>
                Choices
            </label>
            <div>error here</div>
            <button type="button">Next</button>

        </div>
    );
};

export default Question;
