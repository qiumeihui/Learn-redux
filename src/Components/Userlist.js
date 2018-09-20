import React,{ Component } from 'react';
import {connect} from 'react-redux';
import '../assets/userlist.css';
import Conversation from './Conversation';
import { Modal } from 'antd';


class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            visible: false,
        }
    }
    render(){
        const { visible, loading } = this.state;
        let lists = this.props.clientinfo.map(function(item,idx){
           return(<Conversation info={item} key={idx} />) 
        })
        return(
            <div className="list-box">
                <p style={{textAlign:'center',color:'white'}}>消息列表</p>
                {lists}

                <button className="returnbtn" onClick={this.findHistory.bind(this)}>查看历史消息</button>
                <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
    handleCancel = () => {
        this.setState({ visible: false });
      }
    findHistory(){
        // this.props.history.push('history');//前提引入withRouter
        this.setState({
            visible: true,
        });
    }
}

const mapStateToProps =(state)=>{
    return{
        clientinfo:state.msg.clientinfo
    }
}

export default connect(mapStateToProps)(List);

