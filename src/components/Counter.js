import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber, totalClicked, }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <br />
          <label> Times the increment/decrement numbers have been clicked: {totalClicked} </label> 
          {/* <input value={totalClicked} /> */}
          <br />
          <br />
          <input type= "text" 
          onChange={event => onInputNumberChange(event.target.value)}
          value={numberInputted}/>
          <button onClick ={onInputNumber}>New Number</button>
        </div>
      </div>
    );
}


export default Counter;