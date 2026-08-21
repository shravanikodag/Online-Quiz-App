const react = 
[
  {
    id:1,
    question:"React is only used for?",
    options:["Database Management","Building User Interfaces","Operating System",
    "Networking"],
    answer: "Building User Interfacesr"
  },
  {
    id: 2,
    question: "React was developed by?",
    options: [
      "Goggle",
      "Microsoft",
        "Meta (Facebook)",
        "Amazon"
    ],
    answer: "Meta (Facebook)"
  },
  {
    id: 3,
    question: "which command creates a react project",
    options: ['npm install react','react start','npm run dev','npm create vite@latest'],
    answer: 'npm create vite@latest'
  },
  {
    id:4,
    question:'Which hook is used to manage state?',
   options: ['useEffect','useState','useParams','useNavigation'],
    answer: 'useState'
  },
  {
    id:5,
     question:'Which of the following syntax is correct?',
   options: ['const count = useState(0);','const [count, setCount] = useState(0);','const count = setCount(0);','useState = count;'],
    answer: 'const [count, setCount] = useState(0);'

  },
  {
    id:6,
     question:'Which hook would you use after submitting a form to move to the Result page?',
   options: ['UseEffect','useState','useNavigation','useParams'],
    answer: 'useNavigate'
  },
  {
    id:7,
     question:'useEffect(() => {console.log("Welcome"); }); what is printed?',
   options: ['Once','Never','On every day','Twice only'],
    answer: 'On every day'
  },
  {
    id:8,
     question:'Which hook would you use to read the id from this URL? For example /student/101',
   options: ['UseEffect','useState','useNavigation','useParams'],
    answer: 'useParams'
  },
  {
   id:9,
     question:'What does useParams() return?',
   options: ['State values','URL parameters','CSS styles','Props'],
    answer: 'URL parameters'
  },
  {
    id:10,
    question:" <button onClick={() => setCount(count + 1)}>Add</button> ",
    options:['Page refreshes','Count increases by 1','count becomes 0','Error'],
    answer:'count increases by 1'
  },
{
  id:11,
  question:"const [count, setCount] = useState(5);return <h1>{count}</h1>;",
  options:['5','0','Blank','Error'],
  answer:'5'
},
{
  id:12,
  question:"Which package is used for routing?",
  options:['react-dom','react-router-dom','react-router','react-navigation'],
  answer:'react-router-dom'
},
{
  id:13,
  question:"Which component wraps the app for routing?",
  options:
  ['Router','BrowserRouter','Route','switch'],
  answer:'BrowserRouter'
},
{
  id:14,
  question:"Which component defines a route?",
  options:
  ['Router','BrowserRouter','Route','navigate'],
  answer:'Route'
},
{
  id:15,
  question:"Which component is used to navigate without refreshing the page?",
  options:
  ['<a>','<Link>','<button>','<img>'],
  answer:'<Link>'
}
]
export default react;