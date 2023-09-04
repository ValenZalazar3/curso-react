import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'


const style = {
    navbar:{
        display:'flex',
        flexDirecction: 'row',
        height: '100px',
        alignItems: 'center',
        justifyContent:'space-between',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1) ',
        padding:'0 50px',
        position:'relative'


    }
}



class Navbar extends Component {
    render(){
        const { carro, mostrarCarro, esCarroVisible } = this.props
        return(
            <div style={style.navbar}>
                <Logo/>
                <Carro 
                carro={carro}
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}/>
            </div>
        )
    }
}


export default Navbar