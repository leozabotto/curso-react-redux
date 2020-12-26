import React from 'react'
import If, { Else } from './If'

export default props => {
  const usuario = props.usuario || {}
  return (
    <div>
      {/* <If test={usuario && usuario.nome}>
        Seja bem-vindo, <strong>{ usuario.nome }</strong>!
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem-vindo, <strong>desconhecido</strong>!
      </If> */}
      <If test={usuario && usuario.nome}>
        <p>Seja bem-vindo, <strong>{ usuario.nome }</strong>!</p>
        <Else>
          <p>Seja bem-vindo, <strong>desconhecido</strong>!</p>
        </Else>
      </If>
    </div>
  )
}