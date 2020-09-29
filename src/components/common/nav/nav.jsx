import React from 'react';
import cssobj from './nav.less';
import './nav.less';
import { Menu, Dropdown, Input } from 'antd';
import { Link } from 'umi';
import { history } from 'umi';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      keywords: '',
      alert: {},
      dropdowninfo: [
        { href: '/user/home', title: '我的主页' },
        { href: '/msg/m/private', title: '我的消息' },
        { href: '/user/level', title: '我的等级' },
        { href: '/member', title: 'VIP会员' },
        { href: '/user/update', title: '个人设置' },
        { href: '/user/home', title: '实名认证' },
      ],
      list: [
        { path: '', title: '发现音乐' },
        { path: '/my/', title: '我的音乐' },
        { path: '/friend', title: '朋友' },
        { path: 'https://music.163.com/store/product', title: '商城' },
        {
          path: 'https://music.163.com/nmusician/web/index#/',
          title: '音乐人',
        },
        { path: 'https://music.163.com/#/download', title: '下载客户顿' },
      ],
    };
  }
  setclick = path => {
    history.push(path);
  };
  log = () => {
    this.props.dispatch({ type: 'recommend/setVisible', payload: true });
  };
  //退出
  quit = () => {
    this.props.dispatch({
      type: 'userinfo/quit',
    });
  };
  //处理input关键字显示提示
  handleChange = e => {
    this.setState({
      keywords: e,
    });
    if (e) {
      this.props.dispatch({
        type: 'userinfo/showKeywordsAlertAsync',
        payload: e,
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.alert) {
      this.setState({
        alert: nextProps.alert,
      });
    }
  }
  render() {
    const alertshow = () => {
      if (Object.keys(this.state.alert).length > 0) {
        if (this.state.alert.albums) {
          var albumslist = this.state.alert.albums.map((item, index) => {
            return (
              <li
                onClick={() =>
                  history.push(
                    `/album/${item.id}`,
                    this.setState({ keywords: '' }),
                  )
                }
                key={index}
              >
                专辑--{item.name}--{item.artist.name}
              </li>
            );
          });
        }
        if (this.state.alert.artists) {
          var artistslist = this.state.alert.artists.map((item, index) => {
            return (
              <li
                onClick={() =>
                  history.push(
                    `/artist/${item.id}`,
                    this.setState({ keywords: '' }),
                  )
                }
                key={index}
              >
                歌手--{item.name}
              </li>
            );
          });
        }
        if (this.state.alert.playlists) {
          var playlistslist = this.state.alert.playlists.map((item, index) => {
            return (
              <li
                onClick={() => (
                  history.push(`/playlist/${item.id}`),
                  this.setState({ keywords: '' })
                )}
                key={index}
              >
                歌单--{item.name}
              </li>
            );
          });
        }
        if (this.state.alert.songs) {
          var songslist = this.state.alert.songs.map((item, index) => {
            return (
              <li
                onClick={() => (
                  history.push(`/song/${item.id}`),
                  this.setState({ keywords: '' })
                )}
                key={index}
              >
                单曲--{item.name}
              </li>
            );
          });
        }
      }
      return [songslist, artistslist, albumslist, playlistslist];
    };
    const { dropdowninfo, list } = this.state;
    const menu = (
      <Menu>
        {dropdowninfo.map((item, index) => {
          return (
            <Menu.Item key={index}>
              <h3
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => history.push(item.href)}
              >
                {item.title}
              </h3>
            </Menu.Item>
          );
        })}
        <Menu.Item>
          <h3
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => this.quit()}
          >
            退出
          </h3>
        </Menu.Item>
      </Menu>
    );
    const { logstatus, avatarurl } = this.props;
    const { Search } = Input;
    const profileshow = () => {
      if (logstatus) {
        return (
          <Dropdown arrow overlay={menu} placement="bottomCenter">
            <img
              src={avatarurl}
              style={{
                width: 35,
                height: 35,
                marginTop: 20,
                marginLeft: 10,
                borderRadius: '50%',
              }}
              alt="头像"
            />
          </Dropdown>
        );
      } else {
        return (
          <h3
            className={cssobj.register}
            onClick={this.log}
            style={{ color: '#cccccc' }}
          >
            登录
          </h3>
        );
      }
    };

    return (
      <div className="navWrapper">
        <div className="container">
          <div className={cssobj.nav}>
            <h1 className="logo">
              <Link to="/">
                <div className={cssobj.logoJump}>
                  <img src="/static/logo.jpg" alt="" />
                  <h3 style={{ color: 'white' }}>网易云音乐</h3>
                </div>
              </Link>
            </h1>
            <ul className={cssobj.nav_ul}>
              {list.map((item, index) => {
                if (index < 3) {
                  return (
                    <li key={index} onClick={() => history.push(item.path)}>
                      <a
                        className="link"
                        style={{
                          backgroundColor:
                            item.path === history.location.pathname
                              ? 'black'
                              : '',
                        }}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <a className="link" href={item.path}>
                        {item.title}
                      </a>
                    </li>
                  );
                }
              })}
              <Search
                placeholder="音乐/视频/电台/用户"
                allowClear="true"
                value={this.state.keywords}
                className={cssobj.nav_search}
                onChange={e => this.handleChange(e.currentTarget.value)}
                onSearch={() => {}}
              />
              <div
                style={{ display: this.state.keywords ? 'block' : 'none' }}
                className={cssobj.search_info}
              >
                <ul>{alertshow().map(item => item)}</ul>
              </div>
            </ul>
            <button className={cssobj.btn}>创作者中心</button>
            {profileshow()}
          </div>
        </div>
      </div>
    );
  }
}
