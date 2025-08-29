import React, { useState } from "react";

function IncDecCounterFunction() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count > 0 ? count - 1 : 0)
    }
    return (
        <div className="counter-card">
            <h1>Function counter App</h1>
            <h2>Function Component Counter</h2>
            <h3>{count}</h3>
            <div className="btn-group">
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
            </div>
        </div>
    )
} export default IncDecCounterFunction