import {Component} from "react"

class Counter extends Component{
    constructor(props){
       super(props)
       this.state = {
          count : 0
       }
    }

    increse = ()=>{
       this.setState({count : this.state.count + 1})
    } 

    decrease =()=>{
        this.setState({count : this.state.count - 1})
    }
   
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increse}></button>
            </div>
        )
    }
}

export default Counter