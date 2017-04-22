const initialState = {
    messages: [],
    message: {},
    users: []
}

export default function messageReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            console.log(action)
            console.log(state.messages)
            return {...state, messages: [...state.messages, action.data]}
        case 'ADD_USER':
            console.log(action)
            return {...state, users: [...state.users, action.username]}
        default:
            return state
    }
}