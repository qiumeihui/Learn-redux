import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../assets/conversation.css';

class Conversation extends Component{
    constructor(props){
        super(props);
        this.state = {
            ifStartTalk:false
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
            if(this.state.ifStartTalk == true){
                this.props.dispatch({
                type:'OPEN_PANEL',
                currentTalkname:this.props.info.name,
                currentTalktel:this.props.info.tel,
                currentTalkid:this.props.info.id
            })
        }
    }
    openTalk(){
        this.setState({
            ifStartTalk:true
        })
        this.props.dispatch({
            type:'OPEN_PANEL',
            currentTalkname:this.props.info.name,
            currentTalktel:this.props.info.tel,
            currentTalkid:this.props.info.id
        })
    }
}

export default connect()(Conversation);