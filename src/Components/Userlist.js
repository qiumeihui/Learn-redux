import React,{ Component } from 'react';
import {connect} from 'react-redux';
import '../assets/userlist.css';
import Conversation from './Conversation';

class List extends Component{
    constructor(props){
        super(props);
    }
    render(){

        let lists = this.props.clientinfo.map(function(item,idx){
           return(<Conversation info={item} key={idx} />) 
        })
        return(
            <div className="list-box">
                <p style={{textAlign:'center',color:'white'}}>消息列表</p>
                {lists}
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        clientinfo:state.clientinfo
    }
}

export default connect(mapStateToProps)(List);

