import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Stats from "./Pages/Stats/Stats.tsx";
import HowToPlay from "./Pages/HowToPlay/HowToPlay.tsx";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route index element={<Home/>} />
                    <Route path='/stats' element={<Stats/>}/>
                    <Route path='/play' element={<HowToPlay/>}/>
                    <Route path='/about' element={<About/>} />
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App