export const ADD = 'add'
export const TOGGLE = 'toggle'
export const REMOVE = 'remove'

export const addTODO = (todo) => {
    return {
        type : ADD,
        payload : todo,
    }
}

export const completeTODO = (id) => {
    return {
        type : TOGGLE,
        payload : id
    }
}

export const removeTODO = (id) => {
    return {
        type : REMOVE,
        payload : id
    }
}