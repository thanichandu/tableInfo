import React, { useState } from 'react';
import GetInfo from './getInfo';
import obj from './object';
import Search from './search';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const searchResult = obj.filter((eachObj)=>eachObj.first_name.includes(searchTerm));
  return <div>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <GetInfo usersData={searchResult}/>
  </div> 
}

export default App;
