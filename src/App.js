import React, {useState} from 'react';
import Start from "./Components/Start/Start";
import Question from "./Components/Question/Question";
import questions from './Data/questions.json'
import End from "./Components/End/End";

function App() {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const quizHandler = () => {
        setStep(2);
    }

    return (
        <div>
            {step === 1 &&
            <Start
                onQuizStart={quizHandler}
            />}
            {step === 2 &&
            <Question
                data={questions.data[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={questions.data.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
            />}
            {step === 3 && <End/>}
        </div>
    );
}

export default App;
