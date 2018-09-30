import * as CONSTANTS from '../constant';

const addToCart = (state = [], action) => {
    switch(action.type) {
        case CONSTANTS.ADD_TO_CART:
            return [
                ...state,
                action.payload
            ];

        default:
            return state;
    }
}

export {addToCart}