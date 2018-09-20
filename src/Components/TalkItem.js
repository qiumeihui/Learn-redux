import React,{ Component } from 'react';
// import {connect} from 'react-redux';
import '../assets/talkitem.css';

class TalkItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            userlogo:"",
            class:"",
            name:""
        }
    }
    componentDidMount(){
        if(this.props.type === 0){
            this.setState({
                userlogo:'xxx',
                class:'left-message',
                name:'return-username'
            })
        }else{
            this.setState({
                userlogo:'xxx',
                class:'right-message',
                name:'send-username'
            })
        }
    }
   
    render(){
        return(
            <ul className="Messageitem">
                <li className={this.state.class}>
                    <span className={this.state.name}>{this.state.userlogo}</span>
                    <span>{this.props.msgall}</span>
                </li>
            </ul>
        ) 
    }
}

export default TalkItem;