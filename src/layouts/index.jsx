import React from 'react'
import { Component } from 'react';
import Nav from '../components/common/nav/nav'
import Head_nav from '../components/common/head_nav/head_nav'
import Modal from '../components/common/modal/modal'
import {connect} from 'umi'
class Layout extends Component{
    render(){
        const {clickindex,dispatch,userloginfo,alert} = this.props
        return (
            <div>
            <Nav alert={alert} clickindex={clickindex} dispatch={dispatch} logstatus = {userloginfo.userlogstatus} avatarurl={userloginfo.userinfo.avatarUrl} />
            <Head_nav clickIndex={0} />
            <Modal dispatch={dispatch} />
            {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {

    return { clickindex: state.recommend.clickindex, userloginfo: state.userinfo,alert:state.userinfo.alert }
}
export default connect(mapStateToProps)(Layout)