import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={18} nerd={false} />
      <DiretaFilho nome="Gabriel" idade={15} nerd={true} />
    </div>
  )
}