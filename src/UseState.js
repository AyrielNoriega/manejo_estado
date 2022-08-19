import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState(props) {

    //Estados compuestos con useState.
    // const [state, setState] = React.useState({
    //     value: '',
    //     error: false,
    //     loading: false
    // });


    // setState({
    //     ...state,
    //     loading: false
    // })

    const [error, setError] = React.useState(false); //React hook
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        console.log('empezando efecto');
    
        if (loading) {
            setTimeout(() => {
                console.log('haciendo consulta');
        
                setLoading(false);

                if (value === SECURITY_CODE) {
                    setLoading(false);
                    setError(false)
                
                } else {
                    setError(true)
                    setLoading(false);
                }

                console.log('terminando consulta');
            }, 3000);
        }
    
        console.log('terminando efecto');
    }, [loading])

    return(
        <div>
            <h2>Eliminar {props.name}</h2>
            <p>Por favor, escribe el código de seguridad.</p>

            {(error && !loading) && (
                <p>Error: el código es incorrecto.</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}
            <input
                placeholder="codigo de seguridad"
                value={ value }
                onChange={(event) => {
                    setValue(event.target.value)
                }}
            />
            <button
                onClick={()=> setLoading(true)}
            >Compropar</button>
        </div>
    );
}

export { UseState };