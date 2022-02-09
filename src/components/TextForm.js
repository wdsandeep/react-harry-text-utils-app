import { useState } from "react"

function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared!", "success")
    }
    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }
    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
      <>
    <div className="container" style={{color: props.mode === "light" ? "black" : "white"  }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white",color: props.mode === "light" ? "black" : "white"  }} className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.trim().length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.trim().length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.trim().length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.trim().length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.trim().length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"  }}>
        <h2>Your Text Summary</h2>
        <p>{ text.trim()==="" ? '0' : text.split(" ").filter((elm) => elm.length!==0).length} words, {text.trim().length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=> element.length!==0).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.trim().length>0 || "Nothing to preview"}</p>
    </div>
    </>
  )
}

export default TextForm