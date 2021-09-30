import React, {useState} from 'react';

const Question = () => {


    return (
        <div>
            <h2>Question here</h2>
            <label>
                <input type="radio" name="answer" value=""/>
                Choices
            </label>
            <button type="button">Next</button>

        </div>
    );
};

export default Question;
