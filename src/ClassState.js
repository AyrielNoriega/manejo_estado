import React, { Component } from "react";

class ClassState extends Component {
    render(){
        return(
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Por favor, escribe el código de seguridad.</p>

                <input
                    placeholder="codigo de seguridad"
                />
                <button>Compropar</button>
            </div>
        );
    }
}

export { ClassState };