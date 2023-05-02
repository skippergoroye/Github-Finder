const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
               ...state,
               users: action.payload,
               loading: false,
            }
        case 'SET_loading':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        default:
            return state
    }

}



export default githubReducer