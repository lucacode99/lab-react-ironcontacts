import './App.css';
import React from 'react'
import allContacts from './contacts.json'
//import { useState } from 'react'

const firstFiveContacts = allContacts.slice(0, 5)


function App() {
  
  const table = [ <table width="200">{firstFiveContacts.map(item => (
     <div>
    <tr>
      <th align="Left">picture</th>
      <th align="Left">name</th>
      <th align="Left">popularity</th>
      <th align="Left">oscar</th>
      <th align="Left">emmy</th>
      </tr>

      
     <tr>
       <td align="Left"><img src={item.pictureUrl} alt="playing ctor/actress" style={{height: 50}}/></td>
       <td align="Left">{item.name}</td>
       <td align="Left">{item.popularity}</td>
       <td>{item.wonOscar ? <span>🏆</span> : ''}</td>
       <td>{item.wonEmmy ? <span>🏆</span> : ''}</td>
     </tr>
     </div>
    ))
    
    } </table>
    ]
    

  //const [contacts, setContacts] = useState(firstFiveContacts) 
  return (
    <div className="App"> 
    {table}
   

    

    
    </div>
  );
}

export default App;
