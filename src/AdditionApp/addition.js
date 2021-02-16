import React from "react";
export default class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        num1:0,
        num2:0,
        sum:0
      }
    }
  
    handleNum1=(event)=>{
      this.setState({
        num1: event.target.value
      });
    }

    handleNum2=(event)=>{
        this.setState({
          num2: event.target.value
        });
      }
  
    handleAdd=()=>{
      this.setState({
        sum: parseInt(this.state.num1) + parseInt(this.state.num2)
      })
    }

    handleReset=()=>{
        this.setState({
            num1:0,
            num2:0,
            sum:0
        })
    }
  
    render(){
      return(
        <div>
          <input 
            placeholder="Enter a Number"
            value={this.state.num1} 
            onChange={this.handleNum1}
          />
          <br />
          <input 
            placeholder="Enter a Number"
            value={this.state.num2} 
            onChange={this.handleNum2}
          />
          <br />
          <button onClick={this.handleAdd}>
            Add
          </button>
          <button onClick={this.handleReset}>
            Reset
          </button>
          <br />
          The Sum is : {this.state.sum}
        </div>
      )
    }
  }