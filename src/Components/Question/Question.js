import React, {useEffect, useState, useRef} from 'react';

const Question = ({data, onAnswerUpdate, numberOfQuestions, onSetCurrentQuestion, currentQuestion, onSetStep}) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');

    const radioCheck = useRef();

    useEffect(() => {
        const checkedInput = radioCheck.current.querySelector('input:checked')
        if (checkedInput) {
            checkedInput.checked = false
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
    }

    const nextQuestion = (e) => {
        if (selected === '') {
            setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, {question: data.questionText, answer: selected}])
        setSelected('');
        if (currentQuestion < numberOfQuestions - 1) {
            onSetCurrentQuestion(currentQuestion + 1);
        } else {
            onSetStep(3);
        }
    }




    return (
        <div>
            <h2>{data.questionText}</h2>
            <div ref={radioCheck}>
                {data.answerOptions.map((choice, i) =>
                    <label key={i}>
                        <input type="radio" name="answer" value={choice} onChange={changeHandler}/>
                        {choice}
                    </label>
                )}
            </div>
            {error && <div>{error}</div>}
            <button type="button" onClick={nextQuestion}>Next</button>

        </div>
    );
};

export default Question;
