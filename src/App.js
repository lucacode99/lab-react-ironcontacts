import './App.css';
import React, { useState } from 'react'
import allContacts from './contacts.json'

const firstFiveContacts = allContacts.slice(0, 5)
// ermittle zufälligen Kontakt für iteration 3





function App() {
  // Iteration 1+2+3
  const [contactArray, setContactArray] = useState(firstFiveContacts)

  function addRandomContact () {
    const lengthOfContacts = Math.floor(Math.random() * (allContacts.length))
    setContactArray ([...contactArray, allContacts[lengthOfContacts]])
  }

  function sortbyName () {
    const sortedArray = contactArray.sort((a, b) => a.name.localeCompare(b.name))
    setContactArray ([...sortedArray])
    //setContactArray ([...contactArray, sortedArray])
  }

  // function sortbyPopularity () {

  // }

  const table =  <table width="600">{contactArray.map(item => (
  <div key={item.id}>
    <tr>
      <th align="Left">picture</th>
      <th align="Left">name</th>
      <th align="Left">popularity</th>
      <th align="Left">oscar</th>
      <th align="Left">emmy</th>
      <th align="Left">id</th>
    </tr>
      
     <tr>
       <td align="Left"><img src={item.pictureUrl} alt="playing actor/actress" style={{height: 50}}/></td>
       <td align="Left">{item.name}</td>
       <td align="Left">{item.popularity}</td>
       <td>{item.wonOscar ? <span>🏆</span> : ''}</td>
       <td>{item.wonEmmy ? <span>🏆</span> : ''}</td>
       <td>{item.id}</td>
     </tr>

    </div>
    ))
    
    } </table>

  return (
    <div className="App"> 
    <h1>Ironhack Contacts</h1>
    <button onClick = {addRandomContact}>Add random profile</button>   
    <button onClick = {sortbyName}>Sort by name</button> 
    {/* <button onClick = {sortbyPopularity}>Sort by popularity</button>  */}
    {table}
     
    </div>
  );
}

export default App;
