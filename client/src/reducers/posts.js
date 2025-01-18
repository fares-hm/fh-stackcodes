import { FETCH_ALL, CREATE, DELETE, LIKE, UPDATE } from '../constants/actionTypes';

// Reducers to save the new or the updated posts (Front End Use)
export default  (posts = [], action) =>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case CREATE:
            return [ ...posts, action.payload];
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
            
        default:
            return posts;
    }
}