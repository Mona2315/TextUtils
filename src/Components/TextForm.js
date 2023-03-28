import React, {useState} from 'react'



export default function TextForm(props)  {
  
//  setText("new text");
    const handleClick=()=>{
        //console.log("Uppercase was Clicked" + text);
        let newText=text.toUpperCase();
    setText(newText);
   props.showAlert("converted to Uppercase" , "success");
    }
    const handleClearClick=()=>{
      //console.log("Uppercase was Clicked" + text);
      let newText='';
  setText(newText)
  props.showAlert("Text is cleared" , "success");
  }
    const handleLClick=()=>{
      //console.log("Lowercase was Clicked" + text);
      let newText=text.toLowerCase();
  setText(newText);
  props.showAlert("converted to Lowercase" , "success");
  }
    const handleOnChange=(event)=>{
        //console.log("OnChange");
        setText(event.target.value)
    }
    const handleCopyClick=()=>{
      //var text=document.getElementById("myBox")
     // text.select();
     
      navigator.clipboard.writeText(text);
      props.showAlert("copied to clipboard" , "success");
    }
    const handleExtraSpaces=( )=>{
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "))
      props.showAlert("Removed extra spaces" , "success");
    }
    const [text , setText]= useState('');
  
    
    return (

    
      <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 className='mb-2' >{props.heading}</h1>
    <div className="mb-3">
  
  <textarea className="form-control" 
  value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.mode==='dark'?'#8dafcd':'white', color:props.mode==='dark' ? 'white':'black'}}id="myBox" rows="8"></textarea>
</div>

<button  disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClick}>
Convert to Uppercase
</button>
<button  disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLClick}>
Convert to Lowercase
</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>
clear Text
</button>
<button  disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopyClick}>
Copy Text
</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>
RemoveExtraSpaces
</button>
</div>

<div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
  <h1>Your text Summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
 <h2>Preview</h2>
 <p>{text.length>0?text:"Nothing to Preview!"}</p>
</div>
    </>
        )
}


