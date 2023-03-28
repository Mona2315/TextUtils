import React, {useState} from 'react'

function About(props) {
   //const[mystyle , setMyStyle]= useState({
      //  color:'black',
      //  backgroundColor:'white'
    //})
 // const [btntext, setBtnText] = useState("Enable Dark Mode")
    let mystyle={
      color: props.mode === 'dark' ? 'white':'#042743',
      backgroundColor: props.mode === 'dark' ? '#042743':'white',
      
    }

   {/*const toggleStyle=()=>{
       if(mystyle.color=='white') {
        setMyStyle({
            color:'black',
            backgroundColor:'white'

        })
       setBtnText("Enable Dark Mode");
       }else{
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        })
        setBtnText("Enable light Mode");
    }}*/}
  return (
    <div className='container' style={mystyle}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your Text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently.
      </div>
    </div>
  </div>
  <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use </strong>
      </button>
        </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={mystyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
</div>
</div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This word counter software  works in any web browser such as Chorme , Firefox, Internet Explorer, safari, Opera.
      </div>
    </div>
  </div>

{/*<div className='container my-3'>
<button  onClick={toggleStyle}type="button" className     ="btn btn-primary">{btntext}</button>
  </div>*/}
    </div>
    </div>
  )
}

export default About
