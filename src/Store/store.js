import { createStore } from 'redux';
import Reducer from '../Reducers/reducer';

// const initState = {
//     //demo测试
//     'footballscount':8,
//     'color':'blue',
//     //聊天室
//     ifinit:true,
//     message:[],
//     usertype:0,
//     //实际项目需要初始的时候请求接口数据获取客户的消息列表
//     clientinfo:[
//         {name:"张三",tel:"18822221111",id:'01'},
//         {name:"李四",tel:"18833332222",id:'02'}
//     ],
//     currentTalkinfo:{},
// }

const store = createStore(Reducer);
export default store;