import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import Login from "./Pages/Login"
import { Route,Routes } from "react-router-dom"
import Signup from "./Pages/Signup"
import Sentiment from "./Pages/Sentiment"
import NewsMain from './Components/NewsComponents/NewsMain'

function App() {
  console.log("In app")
  return (
    <div className="w-screen h-screen flex">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Content/>}/>
        <Route path="/Sentiment" element = {<Sentiment/>}/>
        <Route path="/News" element = {<NewsMain/>}/>
      </Routes>
    </div>
  )
}

export default App
