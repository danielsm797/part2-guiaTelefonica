import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const add = (event) => {

    event.preventDefault();

    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson))

    setNewName('')
  }

  const handleNameChange = (event) => {

    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={add}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map(x => <li key={x.name}>{x.name}</li>)
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
