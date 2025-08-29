import React from "react";
function HelloMessage(props){
    return (
        <div>
            <h1>Hello {props.name}! my boy How old are You? Are you on your {props.age}</h1>
            {props.children}
        </div>
    );
}export default HelloMessage