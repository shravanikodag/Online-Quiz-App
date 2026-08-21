import { Route,Routes,BrowserRouter} from "react-router-dom";
import Navbar from "./components/navigation";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Result from "./pages/result";


function App()
{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/quiz/:topic" element={<Quiz />} />
         <Route path="/result" element={<Result/>}/>
        </Routes>
        </BrowserRouter>
    )
} 
export default App;



 