import React, { Component } from 'react';
import AddNewUser from './AddNewUser';
import Posts from './MainPosts';
import Users from './Users';


import {getall,getById,addUser,updateUser,deleteUser} from "./utils"



const UsersUrl = "https://jsonplaceholder.typicode.com/users"
const TodosUrl = `https://jsonplaceholder.typicode.com/todos/`
const PostsUrl = "https://jsonplaceholder.typicode.com/posts"


class MainComp extends Component {
  constructor() {
    super()
    this.state= {data:[],todos:[],posts:[],AddUserClick:false}
  }
  
    async componentDidMount() {
    console.log("Load MainComp");
    const {data} = await  getall(UsersUrl)
    this.setState({data})

      
    const getTodos = await getById(TodosUrl)
    this.setState({todos:getTodos.data})

    const getPosts = await getall(PostsUrl)
    this.setState({posts:getPosts.data})

    
  }
  
  UpdateFromUsers = (id ,obj) => {
    let users = [...this.state.data]
    let newuser = {...users[id-1]}
    
    newuser.name = obj.name === ""? "" : obj.name? obj.name : newuser.name
    newuser.email= obj.email === ""? "" : obj.email? obj.email : newuser.email
    
    newuser.address.street = obj.street ==="" ? "":   obj.street? obj.street : newuser.address.street
    newuser.address.city = obj.city ==="" ? "":  obj.city? obj.city : newuser.address.city
    newuser.address.zipcode = obj.zipcode ==="" ? "":  obj.zipcode? obj.zipcode : newuser.address.zipcode
    
    users[id-1] = newuser
    this.setState({data:users})
  }
  
  
  
  DeleteUser = (id) => {
    let users = [...this.state.data]
  let idCheck =  users.map(function(e) { return e.id; }).indexOf(id);  // find the index of user.id.
    
   users.splice(idCheck,1)
    this.setState({data:users})
  }
  
  AddTitleTask = (todos1FromTaksTodos) => {
    let Todos11 = [...this.state.todos]
    Todos11.push(todos1FromTaksTodos)

    this.setState({todos:Todos11})


  }
 
  AddPost = (PostOBJ) => {
    let Posts = [...this.state.posts]
    Posts.push(PostOBJ)
    

    this.setState({posts:Posts})
  }
 
  AddUserClick = () => {
   this.setState({AddUserClick:true})
 }
 
 CancelClick = () => {
   this.setState({AddUserClick:false})
 }
 
 AddUserToData = (name,email,id) => {
  let UsersData = [...this.state.data]
  let newUser = {}
  
  newUser.name = name
  newUser.email = email
  newUser.id= id
  
  let address = {}
  address.street = ""
  address.city = ""
  address.zipcode = ""
  newUser.address =address
  
  UsersData.push(newUser)
  
  this.setState({data:UsersData})

 }
 
  render() {
    const {AddUserClick} = this.state
    
    
    const users = this.state.data.map((user) => user)

    const Users1 = this.props.FilteredItems(this.state.data).map((user,index) => {
      
      return <Users key={user.id}
      todos={this.state.todos.map((todo)=>todo).filter(item => item.userId===user.id &&item != undefined) } // CHECK THE ARRAY IS WITH THE SAM ID AS THE USER AND THAT ITS NOT UNDEFIFNED.
      posts={this.state.posts.map((post) => post).filter(item => item.userId===user.id&&item != undefined)}  
      userdata={user} 
      update={this.UpdateFromUsers} //All functions for children components.
      AddTitle={this.AddTitleTask}
      AddPost= {this.AddPost}
      delete={this.DeleteUser}/> 
    })
    
    return <div>
        
        
        <button onClick={this.AddUserClick} className='ButtonAddMain'>Add</button>
        {AddUserClick && <AddNewUser CancelButton={this.CancelClick} AddUser={this.AddUserToData} id={users[users.length-1].id+1}/>}
        <div>{Users1}</div>
    </div>;
  }
}

export default MainComp
