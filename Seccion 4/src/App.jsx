import { Component } from 'react'


class Button extends Component {
  state = {}
  constructor(props){
    super(props)
    console.log('constructor', props)
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProp, prevState){
    console.log('componenDidUpdate', prevProp, prevState)

  }

  componentWillUnmount(){
    console.log('Desmontando el compoenente', this.props, this.state)
  }
  
  render(){
    console.log('ejecutando metodo de render de button')
    return(
      <button onClick={() => this.setState({ prop: 1})}>
        Enviar
      </button>
    )
  }
}


class App extends Component {

  state = {
    valor: 3
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <p> Hola Mundo</p>
        {this.state.valor === 3 ?
        <Button 
        chanchito= 'Feliz'/> : null}
        <button onClick={() => this.setState ({valor: 2}) }>
        Enviar en App
        </button>
      </div>
    )
  }
}

export default App