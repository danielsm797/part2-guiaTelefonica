import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Filter from './filter'
import Person from './person'
import Formulario from './formulario'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const add = (event) => {

    event.preventDefault();

    const index = persons.findIndex(x => x.name.toLowerCase() === newName.toLowerCase().trim())

    if (index !== -1) {

      return alert(`${newName} is already added to the phonebook`)
    }

    const newPerson = {
      name: newName.trim(),
      number: newNumber
    }

    setPersons(persons.concat(newPerson))

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {

    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {

    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {

    setFilter(event.target.value)
  }

  const listPersons = filter ?
    persons.filter(x => x.name.toLowerCase().includes(filter.toLowerCase().trim())) :
    persons

  return (
    <div>     
      <Filter filter={filter} handleFilterChange={handleFilterChange} />      
      <Formulario add={add} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />      
      <Person persons={listPersons} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
