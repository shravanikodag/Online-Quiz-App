import '../styeling/topicCard.css';
import { useNavigate } from 'react-router-dom';

function TopicCard({ logo, name, questions }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <p className="icon-img" aria-hidden="true">{logo}</p>
      <h2>{name}</h2>
      <h2>{questions} questions</h2>
      <button onClick={() => navigate(`/quiz/${name.toLowerCase()}`)}>Start Quiz</button>
    </div>
  );
}
export default TopicCard;
