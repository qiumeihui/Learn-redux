const initState = {
    //聊天室
    ifinit:true,
    message:[],
    usertype:0,
    //实际项目需要初始的时候请求接口数据获取客户的消息列表
    clientinfo:[
        {name:"张三",tel:"18822221111",id:'01'},
        {name:"李四",tel:"18833332222",id:'02'}
    ],
    currentTalkinfo:{},
}
 const messageReducer = (state = initState,action)=>{
    switch(action.type){    
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
        console.log(action);
        if(action.resmsg){
            return{
                ...state,
                ifinit:false,
                currentTalkinfo:{
                    name:action.currentTalkname,
                    tel:action.currentTalktel,
                    id:action.currentTalkid
                },
                message:[...state.message,action.resmsg]
            };
        }else{
            return{
                ...state,
                ifinit:false,
                currentTalkinfo:{
                    name:action.currentTalkname,
                    tel:action.currentTalktel,
                    id:action.currentTalkid
                }
            };
        }
            
       default:
            return state
   }
}

export default messageReducer;