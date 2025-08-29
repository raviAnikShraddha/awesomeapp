import React, { Component } from "react";
class IncDecCounterClass extends Component {

    state = {
        count: 0
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement() {
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : 0
        });
    }
    render() {
        return (
            <div className="counter-card">
                <h1>Counter Application</h1>
                <h2>Class Component Counter</h2>
                <h3>{this.state.count}</h3>
                <div className="btn-group">
                    <button onClick={() => this.increment()}>+</button>
                    <button onClick={() => this.decrement()}>-</button>
                </div>
            </div>
        )
    }
}
export default IncDecCounterClass