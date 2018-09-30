import * as CONSTANTS from '../constant';

const usersList = (state = [], action) => {
    switch(action.type) {
        case CONSTANTS.ADD_USER:
            return [
                ...state,
                action.payload.data.data
            ]
        
        default:
            return state
    }
}

export default usersList;