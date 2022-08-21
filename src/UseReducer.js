const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

// const reducer = (state, action) => {
// }

// FORMAS DE CREAR LOS REDUCER

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
const reducerObject = (state) => ({
    ERROR: {
        ...state,
        error: true,
        loading: false
    },
    CHECK: {
        ...state,
        loading: true
    },
})

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state)[action.type];
    } else {
        return state;
    }
}

