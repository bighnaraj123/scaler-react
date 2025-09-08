import React from 'react'

const DisplayData = ({pr, fr}) => {
    console.log(pr, fr);
    return (
    <div>
         
      Display Data 
      <ul>
        {fr.map((fruit, index) => {
            console.log(fruit);
            return <li key={index}>{fruit}</li>;
        })}
      </ul>
      <h2>Person Details</h2>
      {/* if name presnet then it will show */}
      <p>Person Name: {pr?.name}</p> 
      <p>Person Age: {pr?.age}</p>
    </div>
  )
}

export default DisplayData
