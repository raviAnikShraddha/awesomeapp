import React, { Component } from "react";
class Student extends Component{
    constructor(props){
        super(props);
        console.log(`Student class Constructor called!`)
    }
    render(){
        return(
            <div>
                <h1>You are a student and Your name is {this.props.name}</h1>
            </div>
        );
    }

}export default Student