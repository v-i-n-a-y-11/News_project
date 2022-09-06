import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App =()=> {
  let pagesize = 9;
 const [mode, setmode] = useState('light')
 const changeMode=()=>{
   if(mode==='light')
   {
     setmode('dark');
     document.body.style.backgroundColor="black";
   }
   else
   {
     setmode('light');
     document.body.style.backgroundColor="white";
   }
 }
 const [progress, setprogress] = useState(0)
    return (
      <>
        <div>
          <Router>
            <Navbar mode={mode} changeMode={changeMode} />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
 key=""
            <Routes>  
              <Route exact path="/" element={<News  key="general" mode={mode} setProgress={ setprogress} pagesize={ pagesize} country="in" category="general" />}> </Route>
              <Route exact path="/science" element={<News  key="science" mode={mode} setProgress={ setprogress} pagesize={ pagesize} country="in" category="science" />}> </Route>
              <Route exact path="/entertainment" element={<News key="entertainment" mode={mode} setProgress={ setprogress} pagesize={ pagesize} country="in" category="entertainment" />}> </Route>
              <Route  exact path="/sports" element={<News  key="sports" mode={mode} setProgress={ setprogress} pagesize={ pagesize} country="in" category="sports" />}> </Route>
              <Route  exact path="/health" element={<News  key="health" mode={mode} setProgress={ setprogress} pagesize={ pagesize} country="in" category="health" />}> </Route>
              <Route  exact path="/technology" element={<News key="technology"  mode={mode} setProgress={ setprogress} pagesize={ pagesize} country="in" category="technology" />}> </Route>
              <Route  exact path="/business" element={<News key="/business" mode={mode}  setProgress={ setprogress} pagesize={ pagesize} country="in" category="business" />}> </Route>
              <Route  exact path="/general" element={<News  key="general" mode={mode} setProgress={ setprogress} pagesize={ pagesize} country="in" category="general" />}> </Route>
              </Routes>
          </Router>
        </div>
      </>
    )
  
}
export default App



