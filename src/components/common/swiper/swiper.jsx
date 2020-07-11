import React, { Component } from 'react'
import cssobj from './swiper.less'
import './swiper.less'
import { Carousel } from 'antd';
import {Link} from 'umi'
import parsePath from '../../../util/parseTargettype'

export default class Swiper extends Component {
    render() {
        const url = 'http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg'
        const { IndexSwiper } = this.props
        const swiper = IndexSwiper.length > 0 ? (IndexSwiper.map((item, index) => {
            if(item.targetId){
                let path = parsePath(item.targetType)
              if(path!=''){ return <div key={index}><Link to={`${path}${item.targetId}`}><img src={item.imageUrl} alt="" /></Link></div>} 
            }else{
                return <div key={index}><a href={item.url}><img src={item.imageUrl} alt="" /></a></div>
            }
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