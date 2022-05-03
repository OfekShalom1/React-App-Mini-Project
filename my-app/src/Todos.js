import React, { Component } from 'react';

class Todos extends Component {
  

  
    render() {
    return <div>
        {this.props.todos?.map((item,index) => {
            return(<div key={index} className='TodosTitles'>Title: {item.title} <br />
            
            <span onClick={this.props.show}>Completed: {item.completed.toString()} {item.completed ? "" : 
            
            <button className='MarkCompletedButton' 
            onClick={() => item.completed=true}>
                Mark Completed</button>}
                
            </span>
            
             </div>
            )
        }

        )} 
    </div>;
  }
}

export default Todos;
