
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');//wheather dark mode is enabled or not
  const [alert,setAlert] = useState('null');

  const showAlert=(message,type)=>{
        setAlert({
          msg:message ,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },1500)

  }
  const toggleMode=()=>{
   if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#59677d';
    showAlert("Dark mode is Enabled" , "success");
   // document.title='TextUtils-Dark Mode';
    /*setInterval(()=>{
      document.title='TextUtils is Amazing ';
    },2000);
    setInterval(()=>{
      document.title='install TextUtils now ';
    },1500);*/ // for highlighting the title
   }else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode is Enabled" , "success");
    //document.title='TextUtils-Light Mode';
   }
    
  }
  
  return (
   <>
     <Router>
    
      <Navbar title="TextUtils" AboutText="About Us" Search="AdvanceSearch" 
      Home="MyHome" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    
     <div className='container my-3'> 
     <Routes>   
          <Route path="/about" element={<About  mode={mode}/>} />
          <Route path="/home" element={<TextForm heading=" Try TextUtils-Word Counter, Character Counter, Remove Extraspaces" on showAlert={showAlert} mode={mode}/>} />
  </Routes>
 
  
    
     
    </div>
    </Router>
    </>
    
    
  );
}

export default App;
