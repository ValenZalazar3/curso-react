import { Component } from "react";

const style= {
    bubbleAlert:{
        backgroundColor:'#E9725A',
        borderRadius:'15px',
        color: '#fff',
        padding:'2px 10px',
        fontSize: '0.9rem',
        width: '20px'

    }
}
class BubbleAlert extends Component {
    getNumber(num){
        if(!num) {''}
        return num > 9 ? '9+' : num

    }
    render(){
        const { value } = this.props
        return(
            <span style={style.bubbleAlert}>
                { this.getNumber(value)}
            </span>
        )
    }
}


export default BubbleAlert