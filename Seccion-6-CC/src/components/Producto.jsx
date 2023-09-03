import { Component } from "react";
import Button from './Button'


const style = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: ' 0 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#0A283E',
    },
    img: {
        width: '100%'
    },
    
}
class Producto extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props

        return (
            <div style={style.producto}>
                <img style={style.img} src={productos.img} alt={productos.name} />
                <h3 >{productos.name}</h3>
                <p >{productos.precio}</p>
                <Button onClick={() => agregarAlCarro(productos)} >
                    Agregar al Carrito
                </Button>
            </div>
        )
    }
}

export default Producto