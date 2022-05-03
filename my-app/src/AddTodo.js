import React, { Component } from 'react';

 class AddTodo extends Component {
  constructor() {
      super()
      this.state={}
  }
  NewTitle = (e) => {
     const {value} = e.target
     this.setState({[e.target.name]:value}) 

  }
 titleSaveAdd = async() => {
  await  this.state.Newtitle ? this.setState({title:this.state.Newtitle}) : console.log("There is no new title");
   
  await  this.state.title? this.props.addTodo(this.state.title) : console.log("todo doesnt add");

 }
  
    render() {
    
    return <div >
      Title:  <input name='Newtitle' onChange={this.NewTitle} type={"text"} />
      <br />
      <br />
      <button onClick={this.props.cancelbutton} className='buttonCancel'>Cancel</button>
      <button onClick={this.titleSaveAdd} className='buttonAddTodoTitle'>Add</button>
    </div>;
  }
}
export default AddTodo;