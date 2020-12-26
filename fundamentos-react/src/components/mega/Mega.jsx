import React, { useState } from 'react'

import MegaResults from './MegaResults'
import Generator from './Generator'

export default props => {

  const [qtd, setQtd] = useState(props.qtd)
  const [sort, setSort] = useState('')

  const handleQtdChange = (e) => {
    setQtd(e.target.value)
  }

  const handleSort = (e) => {
    setSort(Generator(qtd))
  }

  return (
    <div>
      <h1>Mega-Sena</h1>
      <label htmlFor="qtd">Quantidade de números</label><br></br>
      <input 
        type="number" 
        id="qtd" 
        value={qtd} 
        onChange={(e) => {
          handleQtdChange(e)
        } } 
        min="1" 
        max="60" />
      <div>
        <button onClick={handleSort}>Sortear</button>
      </div>

      {sort ? <MegaResults sort={sort} /> : ''}

    </div>
  )
}