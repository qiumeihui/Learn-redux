import React,{ Component } from "react";
import { connect } from 'react-redux';
import { addComments,deleteComments,colorComments } from '../Actions/action';

class Football extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p style={{fontSize:'25px'}}>现在有{this.props.counts}个足球</p>
                <button onClick={this.props.addClick}>请求支援</button>
                <button onClick={this.props.deleteClick}>请求减少</button>
                <button onClick={this.props.changeColor}>心情不好，换个颜色</button>
                <div style={{backgroundColor:this.props.mycolor,width:'200px',height:'300px',margin:'auto'}}></div>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    var state = state.football;
    console.log(state)
    return{
        counts:state.footballscount,
        mycolor:state.color
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addClick:()=>{
            dispatch(addComments())
        },
        deleteClick:()=>{
            dispatch(deleteComments())
        },
        changeColor:()=>{
            dispatch(colorComments('yellow'))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Football)