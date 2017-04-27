const initialState = {
    messages: [],
    users: [],
    user: {},
    username: ''
}

export default function messageReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {...state, messages: [...state.messages, action.message]}
        case 'ADD_USER':
        	return {...state, user: action.user}
        case 'LOGIN':
            return {...state, username: action.username}
        default:
            return state
    }
}