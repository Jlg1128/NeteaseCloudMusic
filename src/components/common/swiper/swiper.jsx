/* eslint-disable import/no-duplicates */
import React, { Component } from 'react';

import { Carousel } from 'antd';
import { Link } from 'umi';
import parsePath from '../../../util/parseTargettype';
import cssobj from './swiper.less';
import './swiper.less';

const url = 'http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg?imageView&quality=89';

export default class Swiper extends Component {
  getSwiper = () => {
    const { IndexSwiper } = this.props;
    return IndexSwiper.length > 0 ? (
      IndexSwiper.map((item, index) => {
        if (item.targetId) {
          const path = parsePath(item.targetType);
          if (path !== '') {
            return (
              <div key={index}>
                <Link to={`${path}${item.targetId}`}>
                  <img src={`${item.imageUrl}?imageView&quality=89`} alt="" />
                </Link>
              </div>
            );
          }
        } else {
          return (
            <div key={index}>
              <a href={item.url}>
                <img src={item.imageUrl} alt="" />
              </a>
            </div>
          );
        }
      })
    ) : (
      <div>
        <h2>
          <Link to="/song/1460930236">
            <img src={url} alt="" />
          </Link>
        </h2>
      </div>
    );
  };

  render() {
    return (
      <div className={cssobj.Swiper}>
        <Carousel autoplay className={cssobj.Carousel}>
          {this.getSwiper()}
        </Carousel>
        <div className={cssobj.install}>
          <img alt="" />
          <button>下载客户端</button>
        </div>
      </div>
    );
  }
}
