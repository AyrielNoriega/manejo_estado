import React, { Component } from "react";

class Loading extends Component {

    componentWillUnmount(){ //el componente se desmontó
        console.log('componentWillUnmount');
    }

    render(){
        return(
            <p>Cargando...</p>
        );
    }
}

export { Loading };