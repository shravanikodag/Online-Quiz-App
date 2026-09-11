import '../styeling/home.css';
import topics from '../data/topic';
import TopicCard from '../components/topicCard';

function Home() {
  return (
    <section className="home">
      <h1>Welcome to Quiz Master</h1>
      <p className="subtitle">Test your programming knowledge and improve your skills.</p>
      <h3>Select a topic to begin</h3>
      <div className="container">
        {topics.map((topic) => (
          <TopicCard key={topic.id} logo={topic.logo} name={topic.name} questions={topic.questions} />
        ))}
      </div>
    </section>
  );
}
export default Home;
