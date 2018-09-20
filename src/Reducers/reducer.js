import { combineReducers } from 'redux';
import messageReducer from './message';
import footballReducer from './football';

const Reducer = combineReducers({
    msg: messageReducer,
    football: footballReducer
})

export default Reducer;