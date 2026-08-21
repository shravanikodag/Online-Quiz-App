import '../styeling/home.css';
import topics from '../data/topic';
import TopicCard from '../components/topicCard';


function Home()
{
    return(
        <section className="home">
            <h1>Welcome To Quiz Master</h1>

      <p className="subtitle" >
        Test Your Programming Knowledge
      </p>

      <h3>Select A Topic To Begin</h3>
            <div className="container">
                {
                    topics.map((index)=>(
                        <TopicCard
                            logo={index.logo}
                            name={index.name}
                            questions={index.questions}
                        />
                    ))
                    
                }
                
                
            </div>
        </section>
    )
}
export default Home;
