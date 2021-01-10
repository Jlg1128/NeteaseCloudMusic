import React, { Component } from 'react';

import { connect } from 'umi';
import Nav from '../components/common/nav/nav';
import HeadNav from '../components/common/head_nav/head_nav';
import Modal from '../components/common/modal/modal';

class Layout extends Component {
  componentDidMount() {
    document.title = '网易云音乐';
  }

  render() {
    const { clickindex, dispatch, userloginfo, alert } = this.props;
    return (
      <div>
        <Nav
          alert={alert}
          clickindex={clickindex}
          dispatch={dispatch}
          logstatus={userloginfo.userlogstatus}
          avatarurl={userloginfo.userinfo.avatarUrl}
        />
        <HeadNav clickIndex={0} />
        <Modal dispatch={dispatch} />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clickindex: state.recommend.clickindex,
    userloginfo: state.userinfo,
    alert: state.userinfo.alert,
  };
}
export default connect(mapStateToProps)(Layout);
