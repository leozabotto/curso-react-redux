import React from 'react'



export default props => {

  const sort = props.sort

  return (
    <div>
      <p>Números Sorteados</p>
      {sort.map(number => <span style={{color: "red", margin: 10 + "px"}}>{number} </span>)} 
    </div>
  )
}