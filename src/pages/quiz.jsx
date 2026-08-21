/* eslint-disable react-hooks/set-state-in-effect */
import { useParams } from "react-router-dom";
import questions from "../data/questions";
import { useState} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styeling/quiz.css'


function Quiz() {
    
    const {topic} = useParams();
    const quiztopic = questions[topic];
    const [Que,setque]=useState(0);
    const [selectedoption, setselectedoption]=useState("");
    const [score, setScore] = useState(0);
    const question= quiztopic[Que];
    const navigate=useNavigate();

    // Time allowed for each question
const QUESTION_TIME = 10;

const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);





  const nextB = () => {

    if (!selectedoption) {
        alert("Please select an option!");
        return;
    }

    // Check answer
    if (selectedoption === question.answer) {
        setScore((prev) => prev + 1);
    }

    // Move to next question
    setque((prev) => prev + 1);

    // Clear selected answer
    setselectedoption("");

    // Reset timer
    setTimeLeft(QUESTION_TIME);
};

    function finishbtn()
    {
         if(!selectedoption)
            {
            alert("Please select an option!");
            return;
            }
          finishQuiz();
    }



    function finishQuiz() {

    let finalscore = score;

    if (selectedoption === question.answer) {
        finalscore++;
    }

    navigate("/result", {
        state: {
            score: finalscore,
            totalque: quiztopic.length,
        },
    });
}

// Timer
useEffect(() => {

    if (timeLeft === 0) {

        // Time is over

        if (Que < quiztopic.length - 1) {

            // Move to next question
            setque((prev) => prev + 1);

            // Clear previous answer
            setselectedoption("");

            // Reset timer for next question
            setTimeLeft(QUESTION_TIME);

        } else {

            // Last question and time is over
            let finalScore = score;

            // If user selected the correct answer,
            // give one point.
            // If nothing was selected, it remains wrong.
            if (selectedoption === question.answer) {
                finalScore++;
            }

            navigate("/result", {
                state: {
                    score: finalScore,
                    totalque: quiztopic.length,
                },
            });
        }

        return;
    }


    // Decrease timer every second
    const timer = setTimeout(() => {

        setTimeLeft((prev) => prev - 1);

    }, 1000);


    // Clear timer when component updates
    return () => clearTimeout(timer);

}, [timeLeft, Que, quiztopic.length, score, selectedoption, question.answer, navigate]);

    return(
        <div className="quiz-box">
            <h1>{topic.toUpperCase()} QUIZ </h1>
            <h3>
    ⏱️ Time Left: {timeLeft} sec
</h3>
            <h3>Question {Que+1}of {quiztopic.length}:</h3>
            <div className="que-box">
            <h2>{question.question}</h2>
            <div className="opt-box">
             
                {
                    question.options.map((option,index)=>(
                        <div key={index} className="option">
                            <input
                                type="radio"
                                id={option}
                                name="ans"
                                value={option}
                                checked={selectedoption===option}
                                onChange={()=>setselectedoption(option)}
                            />
                            <label>{option}</label>
                            </div>
                        

                    ))
   
                }
                </div>
                {
                    Que<quiztopic.length-1 ?(
                        <button className="next-btn" onClick={nextB}>Next</button>
                    ):
                    (
                        <button
                        className="finish-btn"
                        onClick={finishbtn}
                                                 >
              Finish Quiz
            </button>
                    )
                }
                 

            </div>
           
        </div>
    );
}

export default Quiz;