import React from 'react';
import Nav from '../../components/common/nav/nav';
import ScrollTop from '../../components/common/scrolltop/scrolltop';
import HeadNav from '../../components/common/head_nav/head_nav';
import Foot from '../../components/common/foot/foot';

export default class Playlist extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <HeadNav />
        <ScrollTop />
        {/* <Foot /> */}
      </div>
    );
  }
}
