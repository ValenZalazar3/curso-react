import Button from "./Button.jsx";


const arr = [
  'chanchito feliz',
  'chanchito triste',
  'chanchito emocionado',
]


const App = () => {

  const miVariable = false
  if(miVariable){
    return <p>Mi variable dio true</p>
  }
  return(
    <div>
      <h1 onClick={(e) => console.log('click', e)}>Hola mundo</h1>
      {arr.map((el)=> <p key={el}>{el}</p>)}
     <Button onClick={() => console.log('Clickeado NASH')} > 
     Enviar
     </Button>
    </div>
  )
}



export default App