import React from "react";
// this is using props de structuring
function CustUsingFuntion(props) {
    const { name, age } = props
    return (
        <div>
            <h1>Your age is {age} and name is {name}</h1>
        </div>
    );
} export default CustUsingFuntion

// we can also use for de structuring like this without props
// function CustUsingFuntion({ name, age }) {
//     return (
//         <div>
//             <h1>Your age is {age} and name is {name}</h1>
//         </div>
//     );
// } export default CustUsingFuntion
