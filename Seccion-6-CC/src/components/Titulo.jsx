import { Component } from "react";


const style = {
    title:{
        marginBottom: '30px',
    }
}
class Titulo extends Component{
    render(){
        return(
            <h1 style={style.title}>Tienda</h1>
        )
    }
}

export default Titulo