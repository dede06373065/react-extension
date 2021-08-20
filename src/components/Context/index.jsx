import React, { Component } from 'react'
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
    state = {
        name: 'Tom',
        age: 18
    }
    render() {
        const { name, age } = this.state//B组件以及期子组件都能收到name这个状态了 
        return (
            <div>
                <h2>I'm component A.</h2>
                <h3>My name is :{name}</h3>
                <hr />
                <Provider value={{ name, age }}>
                    <B />
                </Provider>
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div>
                <h2>I'm component B.</h2>
                <C />
            </div>
        )
    }
}
// class C extends Component {
//     static contextType = MyContext //可以收到name了
//     render() {
//         console.log(this.context)
//         return (
//             <div>
//                 <hr />
//                 <h2>I'm component C.</h2>
//                 <h3>I get the username from A is :{this.context.name} and age is {this.context.age}</h3>
//             </div>
//         )
//     }
// }
function C() {
    return (
        <div>
            <hr />
            <h2>I'm component C.</h2>
            <h3>I get the username from A is :
                <Consumer>
                    {
                        value=>{
                            return `${value.name} and age is:${value.age}`
                        }
                    }
                </Consumer>
            </h3>
        </div>
    )
}
