import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter:0,
        };
        //Binding the event handler
        //Option 1
        this.increment= this.increment.bind(this);
    }
    //Convert this to a arrow funtion - Option 2
    // increment(){
    //     this.setState({
    //         counter: this.state.counter+1
    //     });
    //     // this.state.counter = 1;
    // }

    // Arrrow funtion has the access to this key word
    increment=()=>{
        this.setState({
            counter: this.state.counter+1
        });
        // this.state.counter = 1;
    }
    decrement(){
        this.setState({
            counter: this.state.counter-1
        });
        // this.state.counter = 1;
    }
    render(){
        return (<div><h3> Count value is : {this.state.counter}</h3>
        <button onClick={this.increment}>Increment</button>
        
        <button onClick={()=> this.decrement()}>Decrement</button></div>)
        
    }
}
export default Counter;