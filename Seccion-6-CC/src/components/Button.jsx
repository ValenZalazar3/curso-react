import { Component } from "react";

const style= {
    button:{
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor:'pointer',
        fontFamily: 'Arial, Helvetica, sans-serif',
    }
}
class Button extends Component{
    render(){
        return(
            <button style={style.button}  {...this.props} />
        )
    }
}


export default Button