import * as CONSTANTS from '../constant';

const fetchInitialData = (state=[], action) => {    
    switch(action.type) {
        case CONSTANTS.FETCH_DATA:
            return action.payload.data

        default:
            return state;
    }
}

export {fetchInitialData};
