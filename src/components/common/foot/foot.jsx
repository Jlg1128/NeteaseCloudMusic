import React, { Component } from 'react';
import cssobj from './foot.less';

export default class foot extends Component {
  render() {
    return (
      <div className={cssobj.foot}>
        <div className={cssobj.regisiter_info}>
          <ul>
            <li>
              <a href="">服务条款</a>
            </li>
            <li>|</li>
            <li>
              <a href="">隐私政策</a>
            </li>
            <li>|</li>
            <li>
              <a href="">儿童隐私政策</a>
            </li>
            <li>|</li>
            <li>
              <a href="">版权投诉指引</a>
            </li>
            <li>|</li>
            <li>
              <a href="">意见反馈</a>
            </li>
          </ul>
          <br />
          <p>
            {' '}
            网易公司版权所有©1997-2020杭州乐读科技有限公司运营：浙网文[2018]3506-263号
          </p>
          <p>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</p>
          <p>粤B2-20090191-18工业和信息化部备案管理系统网站</p>
        </div>
      </div>
    );
  }
}
