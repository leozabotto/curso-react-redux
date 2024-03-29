import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { useCounter } from '../../hooks/useCustom'
import { useFetch } from '../../hooks/useFetch'

const UseCustom = (props) => {

    const [count, inc, dec] = useCounter();
    
    const states = useFetch('http://files.cod3r.com.br/curso-react/estados.json')

    function showStates(states) {
        return states.data.map(state => <li>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01" />
            
            <div className="center">
                <span className="text">
                    {count}
                </span>

                <div>
                    <button className="btn" onClick={() => dec()}>
                        -1
                    </button>
                    <button className="btn" onClick={() => inc()}>
                        +1
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />

            <div className="center">
                <ul>
                    {states.data ? showStates(states) : ''}
                </ul>
            </div>

        </div>
    )
}

export default UseCustom
