import React, { Component } from 'react';
import { connect } from "react-redux";

class Erlian extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <button onClick={this.props.addClick}>请求支援</button>
                <p style={{color:this.props.textcolor}}>{this.props.Owncounts}</p>
                <div style={{width:'200px',height:'200px',backgroundColor:this.props.color,margin:'auto'}}></div>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        Owncounts : state.counts,
        color : state.color,
        textcolor : state.textcolor
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addClick:() => {
            dispatch(
                {
                    type:'ADD_GUN',
                    color:'blue',
                    textcolor:'red'
                    // counts:++1
                }  
            )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Erlian);
