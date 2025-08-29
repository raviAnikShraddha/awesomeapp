import React, { Component } from "react";
class Customer extends Component {
    constructor() {
        super();
        this.state = {
            name: "Jon Snow",
            soldiers: "He is Knight"
        }
    }

    render() {
        // this is destructing props and state
        //const { name, age } = this.props
        const { name, age } = this.state
        return (
            <div>
                <h1>this is your name {name} & age {age}</h1>
            </div>
        )
    }

} export default Customer