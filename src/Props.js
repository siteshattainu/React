import React from "react"

function NewFoo(props) {
    //props.newText = "I changed this value"    Props are immutable, this will throw an error
    return (
        <div id="id1" className="class1">
            <p>This is new component</p>
            <p>{props.newText}</p>
        </div>
    )
}

// onclick => onClick
// onchange => onChange

export default NewFoo;