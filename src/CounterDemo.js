//1. Initialize a state variable called `count` with a default value of 0.
//2. Create a button that, when clicked, increments the `count` by 1.
//3. Create another button that, when clicked, decrements the `count` by 1.
//4. Display the current value of `count` on top of these two buttons.

import { useState } from "react";

//**Bonus:**

//- Disable the decrement button if the count is 0.
//- Add a reset button that sets the count back to 0.

function CounterComponent(){
    //1. Initialize a state variable called `count` with a default value of 0.
    const [count, setCount] = useState(0)

    function xxx(){
        setCount(count + 1)
    }


    return(
        <>
            {/* Task 4: Display the current count */}
            <p>{count}</p>

            {/*2. Create a button that, when clicked, increments the `count` by 1.*/}
            <button onClick={xxx} >Increment</button>

            {/*3. Create another button that, when clicked, decrements the `count` by 1.*/}
            <button onClick={() => setCount(count - 1)} disabled={count === 0} >Decrement</button>

            {/* Add a reset button that sets the count back to 0  */}
            <button onClick={() => setCount(0)} disabled={count === 0} >Reset</button>

        </>
    );

}

export default CounterComponent;