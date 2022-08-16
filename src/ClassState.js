import React, { Component } from "react";

class ClassState extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: true,
            otroEstado: false
        }
    }
    render(){
        return(
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad.</p>
                {this.state.error && (
                    <p>Error: el código es incorrecto.</p>
                )}
                <input
                    placeholder="codigo de seguridad"
                />
                <button
                    //onClick={() => this.setState({error: !this.state.error})}
                    onClick={() => this.setState(prevState => ({error: !prevState.error}))}
                >Compropar</button>
            </div>
        );
    }
}

export { ClassState };