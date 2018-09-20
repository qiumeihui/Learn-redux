import{
    AddFootballs,deleteFootballs,changecolor
} from '../Actions/action';

const initState = {
    //demo测试
    'footballscount':8,
    'color':'blue'
}
const footballReducer = (state = initState,action)=>{
    switch(action.type){
        case AddFootballs:
        console.log(action,state)
            return{...state,footballscount:state.footballscount+10};
            break;
        case deleteFootballs:
            return{...state,footballscount:state.footballscount-10};
            break;
        case changecolor:
            return{...state,color:action.color};
            break;
        default:
            return state;
    }
}

export default footballReducer;