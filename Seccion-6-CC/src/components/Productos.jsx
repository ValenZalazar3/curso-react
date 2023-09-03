import { Component } from "react";
import Producto from './Producto'

const style = {
    productos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Productos extends Component {
    render(){
        const {productos, agregarAlCarro} = this.props
        return(
            <div style={style.productos}>
                {productos.map((producto) => 
                <Producto
                agregarAlCarro={agregarAlCarro}
                key={producto.name}
                productos={producto}
                />)}
            </div>
        )
    }
}


export default Productos