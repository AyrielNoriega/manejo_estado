import React, { Component } from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'paradigma';
class ClassState extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            error: false,
            loading: false
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
                
                if (SECURITY_CODE === this.state.value) {
                    this.setState({ error: false, loading: false });
                } else {
                    this.setState({ error: true, loading: false });
                }
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
                {(this.state.error && !this.state.loading) && (
                    <p>Error: el código es incorrecto.</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}
                <input
                    placeholder="codigo de seguridad"
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value });
                    }}
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