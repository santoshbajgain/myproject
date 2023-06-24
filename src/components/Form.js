import React, {useState} from 'react'
export default function Form(props) {
  const [text,setText] = useState("Enter text here");
  const spaceCount=(text.split(" ").length-1);

  const handleupClick=()=> {
    console.log("button is clicked" )
    let newText= text.toLocaleUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase",'success');
}
    const handleclrClick =()=> {
      let newtext= "";
      setText(newtext)
    }
    
    const handleloClick=()=> {
      let newtext= text.toLowerCase();
      setText(newtext)
      props.showAlert("Converted to lowercase","success");
      
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
   
    const handleChange=(event)=> {
      setText(event.target.value)
  
   }
  return (
    
  <>
  <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1> 
  </div>
  <textarea className="form-control" id="mybox" value={text} onChange={handleChange} style={{backgroundColor : props.mode ==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} rows="5" ></textarea>
  <button className='btn btn-primary mx-3' onClick={handleupClick}>convert to uppercase</button>
  <button className='btn btn-primary mx-3' onClick={handleloClick}>convert to lowercase</button>
  <button className='btn btn-primary mx-3' onClick={handleclrClick}>clear text</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <div className='container' style={{color: props.mode==='dark'?'white':'black'}}> 
    <h2>WORD COUNTER</h2>
    <b><p>{text.length>0?text.trim().split(" ").length:0} Words and {text.length-spaceCount} Characters</p> </b>
    <b><p>{0.08*text.split("").length} seconds to Read the whole sentence </p></b>
    <h2>PREVIEW</h2>
    <p>{text.length>0?text:"Enter in the box to display preview"}</p>

  </div>
  </>

    )
  }


      



