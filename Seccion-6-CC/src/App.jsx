import { Component, useState } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Titulo from './components/Titulo'


class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', precio: 1500, img: '/productos/tomate.jpg' },
      { name: 'Lechuga', precio: 500, img: '/productos/lechuga.jpg' },
      { name: 'Arvejas', precio: 2500, img: '/productos/arvejas.jpg' }
    ]
  }
  render() {
    return (
      <div>
        <Layout>
          <Titulo />
          <Productos
            agregarAlCarro={() => console.log('No hace nada')}
            productos={this.state.productos}
          />

        </Layout>

      </div>
    )
  }
}

export default App
