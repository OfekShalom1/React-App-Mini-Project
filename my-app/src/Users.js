import React, { Component } from 'react';
import MainComp from './MainComp';
import OtherData from './OtherData';
import MainPosts from './MainPosts';
import TasksTodos from './TasksTodos';


const counterforadress = true
 
let counterForClickID = 0

class Users extends Component {
  constructor(){
      super()
      this.state = {user:{}, address:{},newaddress:{},showOtherData:false,showTasks:false}
  }
   async componentDidMount () {
      this.setState({user:this.props.userdata})
      this.setState({newtodos:this.props.todos})
      let todos = [... await this.props.todos]
      todos.filter((item) => item!==undefined )

      this.setState({todoshh:todos})
  }
 
  Address = async() => {
   const useradress = await this.state.user.address
   this.setState({address: {
    street:typeof useradress.street === undefined ? "":useradress.street,
    city:typeof useradress.city === undefined ? "":useradress.city ,
    zipcode: typeof useradress.zipcode === undefined ? "":useradress.zipcode},showOtherData:true})
    
  }
  
  HideComp = () => {
    this.setState ({showOtherData:false})
  }
 
  NameEmailtoParent = (e) => {
     const {value} = e.target
    this.setState({[e.target.name]:value })
  }
  
  UpdateToParent = async() => {
    const obj = this.state.newaddress
    const newuser = 
    {name :this.state.name ? this.state.name:this.state.name===""?"":this.state.user.name,
      email:this.state.email ? this.state.email:this.state.email===""?"":this.state.user.email  ,
      street: await obj.street === "" ? "" :  obj.street?obj.street : this.state.address.street,
      city: await obj.city === "" ? "" :  obj.city ? obj.city  : this.state.address.city ,
      zipcode: await obj.zipcode === "" ?"" :  obj.zipcode?obj.zipcode : this.state.address.zipcode}
   
    this.props.update(this.state.user.id,newuser)
  }
  
  dddd = async (obj) => {
    this.setState({newaddress: await obj})
  }
  
  deleteUser = () => {
    this.props.delete(this.state.user.id)
  }
  ShowTasksUser = () => {
    if(counterForClickID===0){
      this.setState({showTasks:true})
      counterForClickID++
    }else {
      this.setState({showTasks:false})
      counterForClickID = 0
    }
    
    }
    showMarkCompleted = () => {
      this.setState({showTasks:true})
    }
    

    render() {
      
      const  {showOtherData} =  this.state
     
      const {showTasks} = this.state
    
      const todosCompleted = this.props.todos.filter((item) => item.completed === true )
      
    
    return <div className={todosCompleted.length === this.props.todos.length? "divCompletedTrue" : "divCompletedFalse"} >
        
        <div className={this.state.showTasks?"BackroundColorWhenClickID":"BackroundColorWhenClickIDFalse"}>
        <span onClick={this.ShowTasksUser}> ID : {this.state.user.id}</span>  <br />
       
        Name: <input type={"name"} name='name' onChange={this.NameEmailtoParent} defaultValue={this.state.user.name}/> <br />
       
        Email:<input type={"email"} name='email' onChange={this.NameEmailtoParent} defaultValue={this.state.user.email} /> <br />

        <button onMouseOver={this.Address} onClick={this.HideComp} >Other Data</button> 
        
        {showOtherData && <OtherData address={this.state.address} updateadress={this.dddd}/>}
        
        <button className='ButtonUpdateUsers' onClick={this.UpdateToParent}>Update</button>
        <button className='ButtonDeleteUsers' onClick={this.deleteUser}>Delete</button>

        {showTasks && <TasksTodos addtitle={this.props.AddTitle}  todos={this.props.todos} show={this.showMarkCompleted} id={this.state.user.id} />}
        {showTasks && <MainPosts addpost={this.props.AddPost} posts={this.props.posts}   id={this.state.user.id} />}
        <br />
        <br />
        </div>
    </div>;
  }
}




export default Users;