import React, { Component } from "react";
class ClassDemo extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}, this is you class Demo.</h1>
                <h1>Your Age is {this.props.age}</h1>
            </div>
        );
    }
} export default ClassDemo