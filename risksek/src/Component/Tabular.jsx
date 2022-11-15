import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import data from "../Data.json"

export const Tabular = () => {
  //console.log(data)
  const[searchTerm,setSearchTerm] = useState("");
  const[data,setData] = useState(null)
  
  return (
    <div>
<input type="text" placeholder="search" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
<Table style={{width: "80%", margin:"auto"}}>
  <thead>
    <tr>
      <th>#</th>
      <th>ProjectName</th>
      <th>Status</th>
      <th>LastUpdate</th>
      <th>Resources</th>
      <th>ProjectTimiline</th>
      <th>Estimation</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) =>{
      return(
       <tr key={item.id}>
      <td>{item.id}</td> 
      <td>{item.ProjectName}</td>
      <td>{item.Status}</td>
      <td>{item.LastUpdate}</td>
      <td>{item.Resources}</td>
      <td>{item.ProjectTimiline}</td>
      <td>{item.Estimation}</td>
    </tr>
      )
    }  )}
    
    
  </tbody>
</Table>
   
    </div>
  )
}
/*import { useState } from 'react';

function App() {
  const[searchTerm,setSearchTerm] = useState("")
  return (
    <div className="App">
      <input type="text" placeholder="search" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      
   
    {JSONDATA.filter((val)=>{
      if(searchTerm===""){
  
        return val 

        
      }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map((val,key)=>{
      if(searchTerm===""){
        return <div></div>
      }else{
      return <div  className='transparent' key={key}>
        <p>{val.first_name}</p>
      </div>}
    })}
     </div> 
  );
}
 */