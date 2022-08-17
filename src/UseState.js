import React from "react";

function UseState(props) {
    const [error, setError] = React.useState(false); //React hook
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log('empezando efecto');
    
        if (loading) {
            setTimeout(() => {
                console.log('haciendo consulta');
        
                setLoading(false);
        
                console.log('terminando consulta');
            }, 3000);
        }
    
        console.log('terminando efecto');
    }, [loading])

    return(
        <div>
            <h2>Eliminar {props.name}</h2>
            <p>Por favor, escribe el código de seguridad.</p>

            {error && (
                <p>Error: el código es incorrecto.</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}
            <input
                placeholder="codigo de seguridad"
            />
            <button
                onClick={()=> setLoading(true)}
            >Compropar</button>
        </div>
    );
}

export { UseState };