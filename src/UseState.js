import React from "react";

function UseState(props) {
    const [error, setError] = React.useState(false);
    const [otroState, setOtroState] = React.useState(false);

    return(
        <div>
            <h2>Eliminar {props.name}</h2>
            <p>Por favor, escribe el código de seguridad.</p>

            {error && (
                <p>Error: el código es incorrecto.</p>
            )}
            <input
                placeholder="codigo de seguridad"
            />
            <button>Compropar</button>
        </div>
    );
}

export { UseState };