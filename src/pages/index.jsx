import React from 'react';

import Swiper from '../components/common/swiper/swiper';
import Recommend from '../components/container/recommend/recommend';
import Foot from '../components/common/foot/foot';
import ScrollTop from '../components/common/scrolltop/scrolltop';
import Hidewindow from '../components/common/hidewindow/hidewindow';
import { connect } from 'umi';
import Cookies from 'js-cookie';

class Index extends React.Component {
  componentDidMount() {
    let uid = Cookies.get('uid');
    if (uid && !this.props.userloginfo.userlogstatus) {
      this.props.dispatch({
        type: 'userinfo/dogetuserdetail',
        payload: parseInt(uid),
      });
    }
    this.props.dispatch({
      type: 'recommend/AsyncgetDailyRecommendMusic',
    });
  }
  render() {
    const { dispatch, userloginfo } = this.props;
    console.log(this.props);
    const {
      IndexSwiper,
      dailyrecommendmusic,
      HotJoinedSinger,
      HotZhubo,
      NewestAblum,
      toplisthot,
      toplistnewest,
      toplisthotorigin,
    } = this.props.music;
    return (
      <div>
        <Swiper IndexSwiper={IndexSwiper} />
        <Recommend
          userloginfo={userloginfo}
          toplisthot={toplisthot}
          toplistnewest={toplistnewest}
          toplisthotorigin={toplisthotorigin}
          HotJoinedSinger={HotJoinedSinger}
          NewestAblum={NewestAblum}
          HotZhubo={HotZhubo}
          dailyRecommendMusic={dailyrecommendmusic}
          dispatch={dispatch}
        />
        <Foot />
        <ScrollTop />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { music: state.recommend, userloginfo: state.userinfo };
}
export default connect(mapStateToProps)(Index);
