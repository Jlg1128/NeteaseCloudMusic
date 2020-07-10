import React, { Component } from 'react'
import {connect} from 'umi'

class Abluminfo extends Component{
    state={
        ablumid:1232
    }
    getablumid =()=>{
        console.log(this.props);
        
            let {ablumid} = this.props.match.params
            this.setState({ablumid})
    }
    render(){
        return (
            <div>
                <button onClick={this.getablumid}>点我</button>
                <h1>{this.state.ablumid}</h1>
            </div>
        )
    }
}


export default connect()(Userinfo)