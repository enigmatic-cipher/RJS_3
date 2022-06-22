import React from 'react';
import './App.css';
import jsondata from './MOCK_DATA.json';
import { useState } from 'react';

function App() {
	const [searchName, setSearchName] = useState('');
  return (
	 <div className='App'>
		 <input 
			type='text'
			placeholder="Search..." 
			onChange={(event) => {setSearchName(event.target.value)}}/>
		  {jsondata.filter((val)=>{
			 if (searchName == '') {
				 return val
			 } else if (val.first_name.toLowerCase().includes(searchName.toLowerCase())) 			{
				return val	 
			 }
		 }).map((val,key) => {
		 return (
		 	<div className="user" key={key}> 
				<p>{val.first_name}</p>
			</div>
		 );
		 })}
		 </div>
  );
}

export default App;