import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        count: 0
    }
    add = () => {
        //对象式的setState
        const { count } = this.state
        this.setState({ count: count + 1 },()=>{ console.log('callback里的',this.state.count)})
        console.log('紧接着的',this.state.count)//存在异步更新
        //函数式的setState
        this.setState(state=>({count:count+1}))
        //this.setState(state=>{count:state.count+1})

    }
    render() {
        return (
            <div>
                <h1>The current value is :{this.state.count}</h1>
                <button onClick={this.add}>plus one</button>
            </div>
        )
    }
}
