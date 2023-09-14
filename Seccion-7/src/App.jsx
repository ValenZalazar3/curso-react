import { useRef } from "react";




const App = ()=> {
const ref = useRef()
const inputRef = useRef()
const click = () => {
  console.log(re.current.clientHeight)
  ref.current.innerHTML = "Chanchito Feliz"
}
const focus = () => {
  inputRef.current.focus()
}

return(
  <div>
    <input ref={inputRef} />
    <button onClick={focus}>Focus</button>
    <button onClick={click} ref={ref}>Lala</button>
  </div>
)

}








export default App