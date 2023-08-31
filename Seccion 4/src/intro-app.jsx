import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './main.css'

const estilos2 = {
  boxShadow: '0 5px 3px rbga(0,0,0,0.5)'
}
const estilos = (bg = '#333') => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  marging: '10px 15px'
}) // para darle estilos usamos el className, podemos darle style in-line, tambien esta el module.css. En las propiedades style, le estoy mandando al componente el color que quiero asignarle para que cambie en caso de que lo necesite y seria dinamico.

const Li = ({ children }) => {
  return (
    <li className='clase-li'>{children}</li> // 'children' es el destructuring de props, y props es un objeto gigante, que tiene muchas propiedades, que se le pasan al componente, y sencillamente se hace un destructuring para poder acceder a esas propiedades, de manera mas sencilla y para no tener que buscar si las tiene o no.
  )
}


const  App = () => {
  return (
   <Li estado="feliz" >valor de li</Li> // estado es una propiedad que le mandas al componente, la cual va a recibir y poder manipular, por medio de props.estado o bien con el destructuring, {estado}. "el valor de li", se pasa como props al componente Li y va a tener de nombre children.
  )
}

export default App
