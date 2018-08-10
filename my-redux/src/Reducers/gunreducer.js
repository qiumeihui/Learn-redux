// import {action} from '.././Actions/gunaction';
const initialState = {
    counts:10
};

const reducer = (state = initialState,action)=>{
    console.log(action);
    switch (action.type) {
        case 'ADD_GUN':
            return {...state,counts:state.counts+100,color:action.color,textcolor:action.textcolor}
            break;
        default:
            return state
    }
}

export default reducer;