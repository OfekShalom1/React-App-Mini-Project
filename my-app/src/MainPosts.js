import React, { Component } from 'react';
import AddPost from './AddPost';
import Post from './Post';
import { getById } from './utils';



class MainPosts extends Component {
    constructor() {
        super()
        this.state= {h3text:"Posts User -",Addclicked:false}
    }
   
    async componentDidMount () {
     this.setState({posts:this.props.posts})
   }
   
    AddClick = () => {
        this.setState({Addclicked:true , h3text:"New Post - User"})

    }
    CancelClick = () => {
      this.setState({Addclicked:false , h3text:"Posts User -"})
    }
  

    AddNewPost = (title,body) => {
      let Posts = [...this.state.posts]
      let NewPost = {}
      NewPost.title = title
      NewPost.body = body
      NewPost.userId = this.props.id

      Posts = [...this.state.posts,NewPost]
      this.setState({posts:Posts})

      this.props.addpost(NewPost)
    }

    render() {
    const {Addclicked} = this.state

    return <div className='TasksTodos'>
        <h3>
        {this.state.h3text} {this.props.id}
        <button onClick={this.AddClick} className='buttonAddTodo'>Add</button>
        </h3>
        {Addclicked===false && <Post posts={this.props.posts} />}

        {Addclicked && <AddPost cancel={this.CancelClick} AddNewPost={this.AddNewPost}  />}
        
    </div>;
  }
}
export default MainPosts;