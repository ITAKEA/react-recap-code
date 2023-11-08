import { useState } from "react";

function StateDemoComponent(){

    //const name = 'Claus'
    const [name, setName] = useState('')

    return (
        <>
            <h1>Hello</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello  {name}  </p>
        </>
    );

}

export default StateDemoComponent;