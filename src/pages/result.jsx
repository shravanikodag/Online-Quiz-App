import { useLocation, useNavigate } from "react-router-dom";
import '../styeling/result.css'
function Result() {

  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const totalQuestions = location.state?.totalque|| 0;

  const wrongans=totalQuestions-score;
  const percentage=totalQuestions>0 ? Math.round((score/totalQuestions)*100):0;


  let grade;
  if (percentage>=90)
  {
    grade="A";
  }
  else if(percentage>=75)
  {
    grade="B";
  }
  else if(percentage>=60)
  {
    grade="C";
  }
  else if(percentage>=40)
  {
    grade="D";
  }
  else
  {
    grade="F";
  }

    
  

  function restartQuiz() {
    navigate("/");
  }

  return (
    <div className="result-container">

      <h1> Quiz Result</h1>


      <h2>
        Correct Answers: {score}
      </h2>
       <h2>
        Wrong Answers: {wrongans}
      </h2>
      <h2>
        Total Quetions: {totalQuestions}
      </h2>
      <h2>
        Percentage: {percentage}%
      </h2>
       <h2>
        Grade: {grade}
      </h2>


      <button onClick={restartQuiz} className="restart-btn">
        Home Page
      </button>

    </div>
  );
}

export default Result;