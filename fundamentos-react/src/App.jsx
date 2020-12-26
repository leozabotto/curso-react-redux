import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from'./components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

import './App.css'

export default (props) => {

  return (
    <div className="app">
      <h1>Fundamentos React (Arrow)</h1>

      <div className="cards">

        <Card titulo="#13 - Desafio Mega" color="#B9006E">
          <Mega qtd={1}/>
        </Card>

        <Card titulo="#12 - Contador" color="#424242">
          <Contador numeroInicial={10}  />
        </Card>

        <Card titulo="#11 - Componente Controlado" color="#E45F56">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
          <IndiretaPai />
        </Card>

        <Card titulo="#9 - Comunicação Direta" color="#59323C">
          <DiretaPai />
        </Card>

        <Card titulo="#8 - Renderização Condicional" color="#982395">
          <ParOuImpar numero={21}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: 'Leonardo' }}></UsuarioInfo>
          <UsuarioInfo usuario={{}}></UsuarioInfo>
        </Card>
        
        <Card titulo="#7 - Desafio Repetição" color="#3A9AD9">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#6 - Repetição" color="#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#5 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={0} max={100} />
        </Card>

        <Card titulo="#3 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#2 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Leo"
            nota={9.5} />
        </Card>

        <Card titulo="#1 - Primeiro Componente" color="#588C73">
          <Primeiro></Primeiro>
        </Card>

      </div>
    </div>
  )
}