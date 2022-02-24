import { useState } from "react";

export default function CreateUseStateCounter() {
    var [counter, setCounter] = useState(0);

    debugger;
    setTimeout(() => {
        debugger;
        setCounter(counter + 1);
    }, 2000)

   

    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
            
        </div>
    )
}