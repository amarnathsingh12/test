import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        // console.log("Upercase was clicked" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange = (event)=>{
        // console.log("onchange");
        setText(event.target.value);
    }
    const [Text, setText] = useState('Enter text here');  //-> setText("dgfgfg") correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="mybox" class="form-label"></label> */}
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{}} id="mybox" rows="13"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>Convert to uppercase</button>
    </div>
    <div className="container">
        <h1>count words</h1>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
    </div>
    </>
  )
}
