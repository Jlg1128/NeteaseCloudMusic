import React, { Component } from 'react'
import {connect} from 'umi'

class Userinfo extends Component{
    state={
        userid:1232
    }
    getuserid =()=>{
        console.log(this.props);
        
            let {userid} = this.props.match.params
            this.setState({userid})
    }
    render(){
        return (
            <div>
                <button onClick={this.getuserid}>点我</button>
                <h1>{this.state.userid}</h1>
            </div>
        )
    }
}


export default connect()(Userinfo)