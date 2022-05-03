import React, { Component } from 'react';
import axios from 'axios';
import {getall,getById,addUser,updateUser,deleteUser} from "./utils"
import Todos from './Todos';
import AddTodo from './AddTodo';
 
const TodosUrl = `https://jsonplaceholder.typicode.com/todos/?userId=`

class TasksTodos extends Component {
  constructor () {
      super()
      this.state ={todos1:[],AddClicked:false , senetence:"Todos User -"}
  }
  async componentDidMount () {
    const getTodos = await getById(`${TodosUrl}${this.props.id}`)
    this.setState({todos:getTodos.data})
    this.setState({todos1:this.props.todos})
    
  }

  clickOnAdd = async() => {
    this.setState({AddClicked:true, senetence:"New Todo - User"})
   
    
  }
  clickonCancelAddTodo = async() => {
    this.setState({AddClicked:false , senetence:"Todos User -"})
   
    
  }
   AddNewTodo = (Newtitle) => {
    let Todos = [...this.state.todos1]
    
    let newTODO = {}
    newTODO.title = Newtitle
    newTODO.userId = this.props.id
    newTODO.completed = false
    
    Todos = [...this.state.todos1 , newTODO]
    
    this.setState({todos1:Todos})
    this.props.addtitle(this.state.todos1[this.state.todos1.length-1])
   }
  
  
  
  

    render() {
      const {AddClicked} = this.state

      

    return <div  className='TasksTodos'>
       <h3  >{this.state.senetence} {this.props.id} <button onClick={this.clickOnAdd} className='buttonAddTodo'>Add</button></h3>   
        
        
        {AddClicked===false && <Todos todos={this.props.todos} show={this.props.show} data={this.state.todos} />}
        
        {AddClicked && <AddTodo cancelbutton={this.clickonCancelAddTodo} addTodo={this.AddNewTodo} id={this.props.id} todos={this.props.todos} show={this.props.show} data={this.state.todos} />}
        
    </div>;
  }
}



export default TasksTodos;