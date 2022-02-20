import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
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
      <h2>Phonebook</h2>
      <div>
        Filtrar: <input value={filter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={add}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          listPersons.map(x => <li key={x.name}>{x.name} - {x.number}</li>)
        }
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
