import Mock from 'mockjs';

Mock.mock('/chat-res','get',{
    'name': '@name',
    'type|0-1': 0,
    'msg': '你好啊',
    'color': '@color',
    'iflogin|1': true,
    'list|1-10': [{
        'id|+1':1
    }]
})

Mock.mock('/chat-res','post',{
    'name2': '@name',
    'type2|0-1': 0,
    'msg2': '请问需要什么帮助',
    'color': '@color',
    'list|1-10': [{
        'id|+1':1
    }]
})