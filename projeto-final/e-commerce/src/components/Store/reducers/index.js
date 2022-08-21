import { combineReducers } from 'redux';

import { products, categorys } from './products';
import cart from './cart';

export default combineReducers({
    products,
    cart,
    categorys
})
