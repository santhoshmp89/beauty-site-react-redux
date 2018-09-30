import * as CONSTANTS from '../constant';
import axios from 'axios';

const addToCart = (payload) => {
    return {
        type: CONSTANTS.ADD_TO_CART,
        payload
    }
}

const fetchData = () => { 
    const request = axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');    
    return {
        type: CONSTANTS.FETCH_DATA,
        payload: request
    }
}

const addUserAction = (data) => {    
    const request = axios.post('https://reqres.in/api/users', {
        data: {
            name: data.name,
            job: data.age 
        }
    }).then(response => {
        return response
    })
    return {
        type: CONSTANTS.ADD_USER,
        payload: request
    }
}

export {
    addToCart,
    fetchData,
    addUserAction
}