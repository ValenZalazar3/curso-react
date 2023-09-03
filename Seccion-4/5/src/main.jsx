import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// const Li = ({children, estado, casa, edad}) => {
//   return (<li>{children} estoy {estado}</li>)
// }
// const X = () => 
// <ul>
//   <Li 
//   estado={'feliz'}
//   casa={false}
//   edad={24}
//   >
//     Chanchito</Li>

//   <Li estado={'triste'}>Chanchito</Li>
//   <Li estado={'emocionado'}>Felipe</Li>
// </ul>
// ReactDOM.createRoot(
//    document.getElementById('root')
// ).render(<X />)


// Nosotros no escribimos codigo HTML sino que escribimos codigo jsx que es algo parecido al html pero no igual
// Lo primero que nosotros vimos es que ReactDom.render es el encargado de renderizar nuestras aplicaciones en react, este puede recibir un string o puede recibir jsx, que este finalmente este va a ser cambiado por React.createElement, jsx no es mas que azucar sintactica para que nosotros no tengamos que estar escribiendo React.Create element.