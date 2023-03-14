import { useState } from "react";
import React from 'react'

export const Comp1 = () => {
    const [text,setText] = useState("This is my blog");
    return (
        <div>
            <p>This is a component</p>
            <p>{text}</p>
            <button onClick={() => setText("Thank you for liking")}>Like</button>
        </div>
    )
}

export const Comp2 = () => {
    const [count, setCount] = useState(0);
    
    const Increment = () => {
        //setCount(count + 1)
        setCount((prevState) => (prevState + 1))
        console.log(count);
    }

    const Decrement = () => {
        setCount(count - 1)
        console.log(count);
    }

    const addFive = () => {
        Increment()
        Increment()
        Increment()
        Increment()
        Increment()
    }
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={addFive}>Add</button>
            <button onClick={Decrement}>Subtract</button>
        </div>
    )
}

export const Comp3 = () => {
    const [names, setNames] = useState(["Peter", "Harry", "Mary"]);
    let paraValue = <p>This is a para tag</p>
    let arr = []
    for(let i=0; i<names.length; i++){
        arr.push(<li>{names[i]}</li>)
    }
    let jsxNames = names.map((name) => <li>{name}</li>)

    const addNewValue = () => {
        setNames([...names, "Bob"])
    }

    return (
        <div>
            <ul>{jsxNames}</ul>
            <ul>
                {names.map(name => <li>{name}</li>)}
            </ul>
            <button onClick={addNewValue}></button>
        </div>
    )
}

//onclick => onClick    camel case
//onchange => onChange

//<button onclick="() => { newFunction() }">
// () => { newFunction() }
//onclick="newFunction"
//onclick="() => {newFunction()}"