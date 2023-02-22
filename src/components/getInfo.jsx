import React from 'react'
import Child from './child';
// import obj from './object';
import "../App.css"

function GetInfo({usersData}) {
 return (
    <table style={{width:"100%"}}>
        <tr>
           <th>id</th> 
           <th>first_name</th> 
           <th>last_name</th> 
           <th>email</th> 
           <th>gender</th> 
           <th>ip_address</th> 
           <th>img</th> 
        </tr>
        {
            usersData.map((data)=><Child id={data.id} first_name={data.first_name} last_name={data.last_name} email={data.email} gender={data.gender}
            ip_address={data.ip_address} image={data.image}/>)
        }
    </table>
  )
}
export default GetInfo;

