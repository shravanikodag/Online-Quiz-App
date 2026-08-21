import '../styeling/topicCard.css';
import { useNavigate } from 'react-router-dom';

function TopicCard(props)
{ 
    const navigate=useNavigate();
    return(
        <div className='card'>
           <p className='icon-img'>{props.logo}</p>

      <h2 style={{ color:"#1F2937" }}>{props.name}</h2>

             <h2>questions: {props.questions}</h2>
    
      <button onClick={()=>navigate(`quiz/${props.name.toLowerCase()}`)}>Start Quiz</button>
      </div>
    );
}
export default TopicCard;
