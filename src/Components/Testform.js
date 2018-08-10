import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {colorComments} from '.././Reducers/reducer';

class Ownform extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <label>用户名：</label><input type="text" onChange={this.usernameInput} />
                <br/>
                <label>密码：</label><input type="password" onChange={this.pwdInput} />
                <p></p>
                <button onClick={this.props.submit}>提交</button>
            </div>  
        )
    }
    usernameInput(e){
        console.log(e.target.value);
    }
}

const mapStateToProps = (state)=>{
    return{
        username:state.username
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        submit:(event)=>{
            dispatch(colorComments('red'));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Ownform);