import React from 'react'
//函数中没有componentDidMount
const Demo = () => {
    const [count,setCount]=React.useState(0)
    React.useEffect(()=>{
        setInterval(()=>{
            setCount(count=>count+1)
        },1000)
    },[])//[]代表谁也不检测，可以监测count，变化是刷新，数字会越来越快
    return (
        <div>
            <h2>The current value is :{count}</h2>
            
        </div>
    )
}
export default Demo
