import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../assets/conversation.css';
import myaxios from '../utils/util.js';
import axios from 'axios';
import '../Mock/mock';
import { withRouter } from 'react-router-dom';

class Conversation extends Component{
    constructor(props){
        super(props);
        this.state = {
            ifStartTalk:false,
            resdata:""
        }
    }
    render(){
        return(
            <div className="client" onClick={this.openTalk2.bind(this)}>
                <span>{this.props.info.name}</span><br/>
                <span>{this.props.info.tel}</span>
                {this.state.ifStartTalk?
                    <span>对话中</span>
                    :<div className="status-btn">
                        <button onClick={this.openTalk.bind(this)}>接受</button>
                        <button>拒绝</button>
                    </div>}
                
            </div>
        )
    }
    openTalk2(){
        if(this.state.ifStartTalk === true){
                this.props.dispatch({
                type:'OPEN_PANEL',
                currentTalkname:this.props.info.name,
                currentTalktel:this.props.info.tel,
                currentTalkid:this.props.info.id
            })
        }
    }
   
    openTalk(){
        //mock返回假数据
        axios({
            method:'get',
            url:'/chat-res'
        })
        .then(res=>{
            console.log(res.data)
        })

        this.props.dispatch({
            type:'OPEN_PANEL',
            currentTalkname:this.props.info.name,
            currentTalktel:this.props.info.tel,
            currentTalkid:this.props.info.id,
        })
    }
}

export default withRouter(connect()(Conversation));