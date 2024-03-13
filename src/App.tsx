//Componente React
//O que é um componente React?

import './App.css'
import MeuComponente from './componentes/MeuComponente'

function App() {
  let nome = "Gustavo"
  let sobrenome = "Oliveira Silva"
  return (
    <>
    <MeuComponente/>
    <h1 className="nome">{nome}</h1>
    <p className="sobrenome">{sobrenome}</p>
    </>
  )// Retorna JSX - JavaScript XML
}

export default App