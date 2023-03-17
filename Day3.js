import React, {useState} from "react";

export const UsingArray = () => {
    const [names, setNames] = useState(["Peter", "Harry", "Mary"]);
    const [newItem, setNewItem] = useState("");
    let paraValue = <p>This is a para tag</p>


    const addItem = () => {
        //directly setting the array in the state
        //setNames(["Peter", "Harry", "Mary", "Bob"])
        //setting with new array using call back function
        setNames((prevState) => {
            return ([...prevState, newItem])
        })
        setNewItem("")
    }

    const addItemInMiddle = () => {

    }

    const addItemInStart = () => {
        setNames((prevState) => {
            return ([newItem, ...prevState])
        })
        setNewItem("")
    }

    const settingTheName = (event) => {
        console.log(event);
        setNewItem(event.target.value)
    }

    return (
        <div>
            <ul>
                {names.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
            <input type={"text"} name={"item"} value={newItem} onChange={settingTheName}/>
            <button onClick={addItem}>Add</button>
            <button onClick={addItemInMiddle}>Add in the middle</button>
            <button onClick={addItemInStart}>Add in the beginning</button>
        </div>
    )
}

// <li key="0">Peter</li>
// <li key="1">Harry</li>
// <li key="2">Mary</li>