import React from 'react'

const Person = ({ persons }) => {

   return (
      <div>
         <h2>Contacts</h2>
         <ul>
            {
               persons.map(x => <li key={x.name}>{x.name} - {x.number}</li>)
            }
         </ul>
      </div>
   )
}

export default Person