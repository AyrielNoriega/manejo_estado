import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState(props) {

    //Estados compuestos con useState
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false
    });


    // setState({
    //     ...state,
    //     loading: false
    // })

    //estados simples
    // const [error, setError] = React.useState(false); //React hook
    // const [loading, setLoading] = React.useState(false);
    // const [value, setValue] = React.useState('');

    React.useEffect(() => {
        console.log('empezando efecto');
    
        if (state.loading) {
            setTimeout(() => {
                console.log('haciendo consulta');
                //setLoading(false);

                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        loading: false,
                        error: false,
                        confirmed: true
                    });
                    //setLoading(false);
                    //setError(false)
                
                } else {
                    setState({
                        ...state,
                        error: true,
                        loading: false,
                    });
                    // setError(true)
                    // setLoading(false);
                }

                console.log('terminando consulta');
            }, 3000);
        }
    
        console.log('terminando efecto');
    }, [state.loading])

    if (!state.deleted && !state.confirmed) {
        return(
            <div>
                <h2>Eliminar {props.name}</h2>
                <p>Por favor, escribe el código de seguridad.</p>
    
                {(state.error && !state.loading) && (
                    <p>Error: el código es incorrecto.</p>
                )}
                {state.loading && (
                    <p>Cargando...</p>
                )}
                <input
                    placeholder="codigo de seguridad"
                    value={ state.value }
                    onChange={(event) => {
                        setState({
                            ...state,
                            value: event.target.value
                        });
                        //setValue(event.target.value)
                    }}
                />
                <button
                    onClick={()=> {
                        setState({
                            ...state,
                            loading: true
                        });
                    }
                    //setLoading(true)
                    }
                >Compropar</button>
            </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>Estado de confirmación</p>
                <button
                    onClick={() => {
                        setState({
                            ...state, //para utilizar estados compuesta en componentes de funciones es necesario hacer referencia al estado actual con ...state y luego indicar las modificaciones.
                            deleted: true
                        });
                    }}
                >Sí, eliminar</button>
                <button
                    onClick={() => {
                        setState({
                            ...state, //para utilizar estados compuesta en componentes de funciones es necesario hacer referencia al estado actual con ...state y luego indicar las modificaciones.
                            confirmed: false
                        });
                    }}
                >No, me arrepentí</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con éxito</p>
                <button
                    onClick={() => {
                        setState({
                            ...state, //para utilizar estados compuesta en componentes de funciones es necesario hacer referencia al estado actual con ...state y luego indicar las modificaciones.
                            confirmed: false,
                            deleted: false,
                            value: ''
                        });
                    }}
                >
                    Resetear, volver atrás
                </button>
            </React.Fragment>
        );
    }
}

export { UseState };