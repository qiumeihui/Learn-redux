// import { combineReducers } from 'redux';

//actions types声明
const AddFootballs = 'ADD_BALLS';
const deleteFootballs = 'DELETE_BALLS';
const changecolor = 'CHANGE_COLOR';

//action creator
export const addComments=()=>({
     type:AddFootballs
})
export const deleteComments=()=> ({
     type:deleteFootballs
})
export const colorComments=(wantcolor)=> ({
     type:changecolor,
     color:wantcolor
})

//必须要有的初始化state
const initialState = {
    footballscount:''
};

//reducer
const Reducer = (state = initialState,action)=>{
    switch(action.type){
        // case AddFootballs:
        //     return{...state,footballscount:state.footballscount+10};
        //     break;
        // case deleteFootballs:
        //     return{...state,footballscount:state.footballscount-10};
        //     break;
        // case changecolor:
        //     return{...state,color:action.color};
        //     break;
        //在线客服
        case 'SEND_MESSAGE':
            return{
                ...state,
                ifinit:false,
                usertype:action.usertype,
                message:[...state.message,action.message]
            }
        case 'RETURN_MESSAGE':
            return{
                ...state,
                ifinit:false,
                usertype:action.usertype,
                message:[...state.message,action.message]
            };
        case 'OPEN_PANEL':
            return{
                ...state,
                ifinit:false,
                currentTalkinfo:{
                    name:action.currentTalkname,
                    tel:action.currentTalktel,
                    id:action.currentTalkid
                }
            };
       default:
            return state
   }
}

export default Reducer;