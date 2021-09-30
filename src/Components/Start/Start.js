import React from 'react';

const Start = ({ onQuizStart}) => {
    return (
        <div>
            <h1>Start</h1>
            <p>Good luck!</p>
            <button type="button" onClick={onQuizStart}>Start</button>
        </div>
    );
};

export default Start;
