import React, { Component } from 'react';

class AddPost extends Component {
  constructor() {
      super()
      this.state = {}
  }
  onChangeInputs = (e) => {
    const {value} = e.target  
    this.setState({[e.target.name]:value})
  }
  AddToState = async() => {
    await this.state.title? this.setState({titleAdd:this.state.title}) : console.log("There is no new Post title")
    
    await this.state.body? this.setState({bodyAdd:this.state.body }) : console.log("There is no new Post body")
    
    const titleAdd = this.state.titleAdd
    const bodyAdd = this.state.bodyAdd
    
    this.props.AddNewPost(titleAdd ? titleAdd:"", bodyAdd? bodyAdd:"")

}
    render() {
    return <div>
     Body:   <input onChange={this.onChangeInputs} type={"text"} name='body' /> <br />
     Title:   <input onChange={this.onChangeInputs} type={"text"} name='title' /> <br /> 
     
        <br />
    <button onClick={this.props.cancel} className='buttonCancel'>Cancel</button>
    <button onClick={this.AddToState} className='buttonAddTodoTitle'>Add</button>
    </div>;
  }
}
export default AddPost;