/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import {
  PlayCircleOutlined,
  VerticalAlignBottomOutlined,
  FolderAddOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { connect } from 'umi';
import cssobj from './toplist.less';

class Topitemshow extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'toplistinfo/getToplistAsync' });
  }

  render() {
    const { toplist } = this.props.songinfo.toplistinfo;
    const { ranklist } = this.props.songinfo.toplistinfo;

    const toplistinfo =
      toplist.Toplist === undefined ? (
        <h1>Loading</h1>
      ) : (
        toplist.Toplist.list.map((item, index) => (
          <li key={index}>
            <div className={cssobj.index}>{index + 1}</div>
            <div className={cssobj.songname}>
              <a href="">{item.songname}</a>
            </div>
            <div className={cssobj.songtime}>{item.songtime}</div>
            <div className={cssobj.singernmae}>
              <a href="">{item.singer}</a>
            </div>
          </li>
        ))
      );

    return (
      <div className={`${cssobj.Toplist_list} ${cssobj.clearfix}`}>
        <div className={cssobj.Topitem_wrap}>
          <div className={cssobj.Topitem_Title}>
            <span
              style={{ backgroundColor: ranklist.bgc }}
              className={cssobj.main_img}
            >
              {ranklist.span}
            </span>
            <div className={cssobj.Title_wrap}>
              <h1>{ranklist.h4}</h1>
              <p>最近更新：5月30日(每日更新)</p>
              <span>
                <button style={{ margin: 0 }}>
                  <PlayCircleOutlined />
                  播放
                </button>
                <button style={{ margin: 0 }}>+</button>
              </span>
              <button>
                <VerticalAlignBottomOutlined />
                下载
              </button>
              <button>
                <FolderAddOutlined />
                (31235)
              </button>
              <button>
                <MessageOutlined />
                (31235)
              </button>
              <button>
                <ShareAltOutlined />
              </button>
            </div>
            <div className={cssobj.Topitem_main}>
              <div className={cssobj.Topitem_main_title}>
                <h2>歌曲列表</h2>
                <i>播放 ：3192162048次</i>
              </div>
              <div className={cssobj.Topitem_main_list}>
                <div className={cssobj.Topitem_main_list_title}>
                  <div className={cssobj.kongbai} />
                  <div className={cssobj.biaoti}>标题</div>
                  <div className={cssobj.shichang}>时长</div>
                  <div className={cssobj.geshou}>歌手</div>
                </div>
                <ul className={cssobj.Topitem_main_list_main}>{toplistinfo}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { songinfo: state };
}
export default connect(mapStateToProps)(Topitemshow);
