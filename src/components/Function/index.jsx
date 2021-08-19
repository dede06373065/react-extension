import React from 'react'

const Demo= () => {
    const myRef=React.useRef()
    const show=()=>{
        alert(myRef.current.value)
    }
    return (
        <div>
            <input type="text" ref={myRef}/>
            <button onClick={show}>show the data</button>
        </div>
    )
}
export default Demo
