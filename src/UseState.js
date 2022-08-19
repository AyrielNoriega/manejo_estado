import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState(props) {

    //Estados compuestos con useState
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false
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
                        error: false
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
}

export { UseState };