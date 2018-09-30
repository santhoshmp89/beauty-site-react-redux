import {combineReducers} from 'redux';
import {addToCart} from './reducers-addToCard';
import {fetchInitialData} from './reducers_fetchData';
import usersList from './reducers_usersList';

const rootReducer = combineReducers({
    addToCartList: addToCart,
    makeUpData: fetchInitialData,
    usersList: usersList
})

export default rootReducer;