import React from "react"

const InputComponent = (props) => {
    let input_type = props.type
    let input_name = props.name
    return (
        <input type={input_type} name={input_name}/>
    )
}

export const CC = () => {
    return (
        <div className="App">
            <form>
                <InputComponent type="text" name="FirstName"/>
                <InputComponent type="text" name="SecondName"/>
                <InputComponent type="text" name="Email"/>
            </form>
        </div>
    )
}