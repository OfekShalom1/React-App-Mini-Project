

import './App.css';
import MainComp from './MainComp';
import { useState,useRef } from 'react';

const getFiltered = (query,users) => {
  if (!query) {
    return users
  }
  return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()) 
  || user.email.toLowerCase().includes(query.toLowerCase()))
}

function App() {
  const [query,setQuery] = useState('')
  const inputEl = useRef("")
  
  
  const FilteredItems = (users) => getFiltered(query,users)
  return (
    
    <div className="App">
     Search: <input 
     type={"text"}
    type={"text"}
    placeholder='Search Users...'
    className='Search'
    onChange={e => {setQuery(e.target.value)}}

     />
     <MainComp 
 
     ref1={inputEl} 
     term={query} 
     FilteredItems={FilteredItems}
    />

    </div>
  );
}

export default App;
