import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import TalkItem from './TalkItem';
import List from './Userlist';
import '../assets/chat.css';
import {withRouter} from 'react-router-dom';

class WeChat extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // console.log(this.props.match.params.userid);//接受主页传过来的参数
    }
    componentDidUpdate(){
        //仅作用于聊天消息超出界面时自动滚动 
        let msg = document.getElementById("panel");
        msg.scrollTop = msg.scrollHeight;
    }
    sendmessage(){
        this.props.dispatch({
            type:'SEND_MESSAGE',
            usertype:1,
            clientname:this.props.currentTalk,
            message:document.getElementById("mysend").value
        })     
    }
    //回复
    // returnmessage(){
    //     this.props.dispatch({
    //         type:'RETURN_MESSAGE',
    //         usertype:0,
    //         message:document.getElementById("myback").value
    //     })
    // }
  
    render(){
        var messages = this.props.message.map((item,idx)=>{
            return <TalkItem msgall={item} type={this.props.usertype} key={idx}/>
        });
        return(
            <div className="Wechat-box">
                <List/>
                <div className="chat-box">
                    <div className="panel" id="panel">
                    {this.props.ifinit?<p>暂无消息</p>:
                    <p>当前接入人：{this.props.currentTalkinfo.name}  电话:{this.props.currentTalkinfo.tel}</p>}
                    {messages}
                    </div>
                    
                    <div className="sendbox">
                        <textarea className="send" id="mysend" defaultValue="你好啊"></textarea>                      
                        <button className="sendbtn" onClick={this.sendmessage.bind(this)}>发送</button>
                    </div>
                    {/* <div className="returnbox">
                        <textarea className="return" id="myback" defaultValue="你也好"></textarea>
                        <button className="returnbtn" onClick={this.returnmessage.bind(this)}>回复</button>
                    </div> */}
                    <Link to='/'><button className="btn">返回首页</button></Link>             
                </div> 
            </div>
        )
    }   
}




const mapStateToProps = (state)=>{
    console.log(state)
    var state = state.msg;
    return{
        ifinit:state.ifinit,
        usertype:state.usertype,
        message:state.message,
        currentTalkinfo:state.currentTalkinfo
    }
}

export default withRouter(connect(mapStateToProps)(WeChat));