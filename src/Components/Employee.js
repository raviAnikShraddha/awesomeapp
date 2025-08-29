import React, { Component } from "react";
class Employee extends Component {
    //with using constructor performing state
    /* constructor(props) {
         super(props);
         this.state = {
             count: 0,
             name: "Ravi",
             age: this.props.age
         }
     }*/
    ////without using constructor performing state
    state = {
        count: 0,
        name: "Ravi",
        age: this.props.age
    }
    changeName() {
        this.setState({
            count: this.state.count + 1,
            name: "Rohan",
            age: 36
        })
    }
    render() {
        return (
            <div>
                <h1>My name is {this.state.name}, Age is {this.state.age} & Counter is {this.state.count}</h1>
                <div className="container"><button onClick={() => this.changeName()} >Click</button></div>
            </div>
        )
    }
} export default Employee