import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer(props) {

    //Estados compuestos con useState
    const [state, dispatch] = React.useReducer(reducer, initialState);
    console.log(state);
    React.useEffect(() => {
        console.log('empezando efecto');
    
        if (state.loading) {
            setTimeout(() => {
                console.log('haciendo consulta');
                //setLoading(false);

                if (state.value === SECURITY_CODE) {
                    dispatch({
                        type: 'CONFIRM'
                    });
                } else {
                    dispatch({
                        type: 'ERROR'
                    });
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
                        dispatch({ 
                            type: 'WRITE',
                            payload: event.target.value
                        });
                       //onWrite(event.target.value)
                    }}
                    
                />
                <button
                    onClick={()=> {
                            dispatch({ type: 'CHECK' });
                           // onCheck();
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
                        dispatch({ type: 'DELETE' });
                        //onDelete();
                    }}
                >Sí, eliminar</button>
                <button
                    onClick={() => {
                        dispatch({ type: 'RESET' });
                        //onReset();
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
                        dispatch({ type: 'RESET' });
                        //onReset();
                    }}
                >
                    Resetear, volver atrás
                </button>
            </React.Fragment>
        );
    }
}

//lo primero que necesitamos para nuestros reducer son estados compuestos. 
const initialState = {
    value: 'paradigma',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

// const reducer = (state, action) => {
// }

// FORMAS DE CREAR LOS REDUCER

//los reducer reciben dos parámetros, el state y el action

//reducer if
const reducerIf = (state, action) => {
    if (action.type === 'ERROR') {
        return {
            ...state,
            error: true,
            loading: false
        };
    } else if (action.type === 'CHECK') {
        return {
            ...state,
            loading: true
        };
    } else {
        return {
            ...state
        };
    }
}

//reducer swith - forma mas popular que crear los reducer. 
const reducerSwith = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false
            }

        case 'CHECK':
            return {
                ...state,
                loading: true
            }
    
        default:
            return {
                ...state
            };
    }
}

//reducer swith
const reducerObject = (state, payload) => ({
    CONFIRM: {
        ...state,
        loading: false,
        error: false,
        confirmed: true
    },
    ERROR: {
        ...state,
        error: true,
        loading: false
    },
    CHECK: {
        ...state,
        loading: true
    },
    DELETE:{
        ...state,
        deleted: true
    },
    RESET: {
        ...state,
        confirmed: false,
        deleted: false,
        value: ''
    },
    WRITE: {
        ...state,
        value: payload
    }
})

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
}

export { UseReducer };
