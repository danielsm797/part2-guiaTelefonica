import React from 'react'

const Formulario = (props) => {

   return (
      <div>
         <h2>Add contact</h2>
         <form onSubmit={props.add}>
            <div>
               name: <input required value={props.newName} onChange={props.handleNameChange} />
            </div>
            <div>
               number: <input required value={props.newNumber} onChange={props.handleNumberChange} />
            </div>
            <div>
               <button type="submit">add</button>
            </div>
         </form>
      </div>
   )
}

export default Formulario