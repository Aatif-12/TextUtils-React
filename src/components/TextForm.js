import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log('Upper case was Clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = () => {
    let newText = ("");
    setText(newText);
  }
  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(38 83 118)' : 'white', color: props.mode === 'dark' ? 'white' : 'rgb(38 83 118)' }} id="myBox" rows="8" ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCasse</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCasse</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      </div >

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words & {text.length} characters</p>
        <p><b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  )
}
