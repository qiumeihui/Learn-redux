import { createStore } from 'redux';
import reducer from '.././Reducers/gunreducer';


const initState = {
    'counts':110,
    'color':'green',
    'textcolor':'gray'
}
const store = createStore(reducer,initState);
export default store