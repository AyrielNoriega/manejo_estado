import React, { Component } from "react";
import { Loading } from "./Loading";

class ClassState extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: true,
            loading: true
        }
    }

    componentWillMount(){ //se montará el componente
        console.log('componentWillMount');
    }

    componentDidMount(){ //se montó el componente
        console.log('componentDidMount');
    }

    // componentWillUnmount(){ //el componente se desmontó
    //     console.log('componentWillUnmount');
    // }

    componentDidUpdate(){ //componente Se actualizó
        console.log('componentDidUpdate');

        if (this.state.loading) {
            setTimeout(() => {
                console.log('haciendo consulta');
        
                this.setState({ loading: false});
        
                console.log('terminando consulta');
            }, 3000);
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
                {this.state.loading && (
                    <Loading />
                )}
                <input
                    placeholder="codigo de seguridad"
                />
                <button
                    //onClick={() => this.setState({error: !this.state.error})}
                    onClick={() => this.setState(prevState => ({loading: !prevState.loading}))} //utilizando el prevState
                >Compropar</button>
            </div>
        );
    }
}

export { ClassState };