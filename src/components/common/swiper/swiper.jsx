import React, { Component } from 'react'
import cssobj from './swiper.less'
import './swiper.less'
import { Carousel } from 'antd';
import {history,Link} from 'umi'

export default class Swiper extends Component {
    render() {
        const url = 'http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg'
        const { IndexSwiper } = this.props
        const swiper = IndexSwiper.length > 0 ? (IndexSwiper.map((item, index) => {
            return <div key={index}><Link to={`/song/${item.targetId}`}><img src={item.imageUrl} alt="" /></Link></div>
        })) : (<div><h2><Link to={`/song/1460930236`}><img src={url} alt="" /></Link></h2></div>)
        return <div className={cssobj.Swiper}>
            <Carousel autoplay className={cssobj.Carousel}>
                {swiper}
            </Carousel> 
            <div className={cssobj.install}>
                <img alt="" />
                <button>下载客户端</button>
            </div>
        </div>
    }
}