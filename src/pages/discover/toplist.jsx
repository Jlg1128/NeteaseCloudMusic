import React from 'react';
import { connect } from 'umi';
import Foot from '../../components/common/foot/foot';
import TopItem from '../../components/toplist/topitem';

class Toplist extends React.Component {
  render() {
    const { clickindex } = this.props.listinfo;
    return (
      <div>
        {/* <Foot /> */}
        <TopItem
          toplist={this.props.listinfo.toplist[0]}
          clickIndex={clickindex}
          dispatch={this.props.dispatch}
        />
        {this.props.children.props.children}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { listinfo: state.toplistinfo };
}
export default connect(mapStateToProps)(Toplist);
