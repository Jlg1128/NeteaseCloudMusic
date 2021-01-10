import React, { Component } from 'react';
import { history } from 'umi';
import cssobj from './head_nav.less';

export default class HeadNav extends Component {
  state = {
    isrender: false,
    list: [
      { path: '/discover', title: '推荐' },
      { path: '/discover/toplist', title: '排行榜' },
      { path: '/discover/playlist', title: '歌单' },
      { path: '/discover/djradio', title: '主播电台' },
      { path: '/discover/artist', title: '歌手' },
      { path: '/discover/album', title: '新碟上架' },
    ],
  };

  handleClick = path => {
    history.push(path);
  };

  componentWillReceiveProps() {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      isrender: !this.state.isrender,
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <div className={cssobj.haed_nav}>
          <ul className={cssobj.haed_nav_ul}>
            {list.map(item => (
              <li key={item.title}>
                <span
                  onClick={() => this.handleClick(item.path)}
                  className={cssobj.haed_nav_link}
                  style={{
                    backgroundColor:
                      item.path === history.location.pathname ? '#242424' : '',
                  }}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
