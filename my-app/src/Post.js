import React, { Component } from 'react';

class Post extends Component {
  constructor () {
      super()
      this.state = {}
  }
  
  
    render() {
    return <div>
        {this.props.posts.map((post,index) =>{
            return (<div className='TodosTitles' key={index}>
             
              Body: {post.body} <br /><br />
              
              Title : {post.title}
             
             </div>)
            } )}
    </div>;
  }
}
export default Post;