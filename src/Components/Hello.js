import React from "react";
let facebook_ceo = "Mark Zuckerberg"
let earning = 0
const car_obj = {
    name: 'Ferrari',
    color: 'Red'
}
car_obj.color === 'Red' ? earning = 500 : earning = 0
function Hello() {
    return (
        <>
            <h1>Hello Facebook People, and {facebook_ceo}</h1>
            <p>The founder of facebook {facebook_ceo} is having car {car_obj.name} and the color is {car_obj.color}.
                His net worth is {earning}$ billion USD.<br/>
            </p>
        
        </>

    );
} export default Hello