import React from "react"

const ToDo = (props) => {
    let appTitle = props.title;
    let id = props.id;
    // let condition = id == "1";
    return (
        <div>
            <h3>ToDo App</h3>
            <input type="text" />
            <button>Add</button>
            {/* {id == "1" ? <button>Delete</button> : null} */}
            {id == "1" && <button>Delete</button>}
        </div>
    )
}

// x == 3 ? foo() : bar()
export default ToDo;