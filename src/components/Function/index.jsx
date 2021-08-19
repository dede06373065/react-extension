import React from 'react'

function Demo(){
    //const a=React.useState()//a是数组，第一个元素是状态，第二个是更新状态的方法
    const [count, setCount]=React.useState(0)
    function add(){
        setCount(count+1)
    }
    return(
        <div>
            <h2>The current value is:{count}</h2>
            <button onClick={add}>plus one</button>
        </div>
    )
}
export default Demo
