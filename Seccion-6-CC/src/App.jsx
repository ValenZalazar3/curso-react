import { Component, useState } from 'react'
import Productos from './components/Productos'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Titulo from './components/Titulo'


class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', precio: 1500, img: '/productos/tomate.jpg' },
      { name: 'Lechuga', precio: 500, img: '/productos/lechuga.jpg' },
      { name: 'Arvejas', precio: 2500, img: '/productos/arvejas.jpg' },
    ],
    carro:[],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto)=> {
    if(this.state.carro.find(p=> p.name === producto.name)){
      const newCarro = this.state.carro.map(p => p.name === producto.name ? ({...p, cantidad: p.cantidad + 1}): p)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({...producto, cantidad: 1})
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }
  render() {

    return (
      <div>
        <Navbar 
        carro={this.state.carro}
        esCarroVisible={this.state.esCarroVisible}
        mostrarCarro={this.mostrarCarro}
      
        />
        <Layout>
          <Titulo />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />

        </Layout>

      </div>
    )
  }
}

export default App
