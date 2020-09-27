import {combineReducers} from 'redux';
import AvailableItems from './displayItems';
import ItemsInCart from './cartItems';
const Reducers = combineReducers({AvailableItems,ItemsInCart});

export default Reducers;