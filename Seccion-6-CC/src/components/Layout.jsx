import { Component } from "react";

const style = {
    layout:{
        backgroudColor: '#fff',
        color: '#0A283E0',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        
    },
    container:{
        width:'1200px',
       
    }
}

class Layout extends Component {
    render() {

        return (
            <div style={style.layout}>
                <div style={style.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout