import React, { Component } from 'react';

 class AddNewUser extends Component {
  constructor () {
      super()
      this.state = {}
  }
  OnChangeInput = (e) => {
    const {value} = e.target
    this.setState({[e.target.name]: value})
  }
  AddToState = async() => {
  await  this.state.email? this.setState({EmailAdd:this.state.email}):console.log("the email input is empty");
  
  await  this.state.name? this.setState({NameAdd:this.state.name}):console.log("the email input is empty");
    this.setState({id:this.props.id})
    
    const name = this.state.NameAdd
    const email = this.state.EmailAdd
    const id = this.state.id
    this.props.AddUser(name ? name:"" , email ? email : "" , id)
  
}
  
    render() {
    return <div className='addUserDiv'>
    <div className='marginIn'>
    Name: <input onChange={this.OnChangeInput} name='name' type={"text"}  className='AddNweUserInputs'/> <br /> <br />
    Email: <input onChange={this.OnChangeInput} name='email'  type={"email"} className='AddNweUserInputs'  />
    </div> 
    
    <button onClick={this.props.CancelButton} className='buttonAddCancelUser' >Cancel</button>
    <button onClick={this.AddToState} className='buttonAddUser'>Add</button>
    
    </div>;
  }
}
export default AddNewUser