import React, {useState} from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestions, onSetCurrentQuestion, currentQuestion, onSetStep}) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');


    const changeHandler = (e) => {
        setSelected(e.target.value);
    }

    const nextQuestion = (e) => {
        if(selected === ''){
            setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, { question: data.questionText, answer: selected}])
        setSelected('');
        if(currentQuestion < numberOfQuestions -1){
            onSetCurrentQuestion(currentQuestion + 1);
        } else{
            onSetStep(3);
        }
    }



    return (
        <div>
            <h2>{data.questionText}</h2>
            {data.answerOptions.map((choice, i) =>
                <label key={i}>
                    <input type="radio" name="answer" value={choice} onChange={changeHandler}/>
                    {choice}
                </label>
            )}
            <div>error here</div>
            <button type="button" onClick={nextQuestion}>Next</button>

        </div>
    );
};

export default Question;
