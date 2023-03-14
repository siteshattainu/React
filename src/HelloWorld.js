import React, { Component, useState } from "react";

//Functional component
function HelloWorld(props){
    let text = props.textToDisplay
    return React.createElement(
        'div', 
        null, 
        React.createElement('p', null, "Hello World")
    )
    // return React.createElement('div', {id: "id1", className: "class1"}, 
    //     React.createElement('p', null, props.textToDisplay)
    // );
}

/*
    <div>
        <p></p>
    </div>
*/

//Class component
class HelloWorld1 extends Component{
    render(){
        return (
            <div>
                <p>Hello World</p>
            </div>
        )    
    }
}

export default HelloWorld;