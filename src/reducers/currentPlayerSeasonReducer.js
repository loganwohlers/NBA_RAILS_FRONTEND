export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLAYER_SEASON':
            return action.payload
        case 'FETCH_ONE_PLAYER_SEASON':
            return { ...state, boxscore: action.payload }

        default:
            return state
    }
}