import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked")
        setText(text.toUpperCase())
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked")
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        // console.log("ON change ")
        setText(event.target.value)
    }

    // eslint-disable-next-line
    const [text, setText] = useState('Enter text here')

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Uppercase</button>
            </div>
            <div className="container2 my-3">
                <h1>Your text Summary</h1>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                {/* <p>{wordCalc} words and {text.length} characters</p> */}
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
