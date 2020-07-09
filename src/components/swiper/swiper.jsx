import React, { Component } from 'react'
import cssobj from './swiper.less'
import './swiper.less'
import { Carousel } from 'antd';

export default class Swiper extends Component {
    constructor() {
        super()
        this.state = {
            swiperItem: [
                'http://p1.music.126.net/8NP-_ROpC3YyifwXvp9sKA==/109951165013399872.jpg?imageView&quality=89',
                'http://p1.music.126.net/6RoLYZ9VQF75OqpKTJSl0A==/109951165014150781.jpg?imageView&quality=89',
                'http://p1.music.126.net/R8GPoYxPNsotz5Mcai9qvw==/109951165014157731.jpg?imageView&quality=89',
                'http://p1.music.126.net/xn2iAm2aUuIWIiN3b-LhWw==/109951165014179896.jpg?imageView&quality=89',
                'http://p1.music.126.net/f1lYllMkehbxfEA4yJEsQw==/109951165014242385.jpg?imageView&quality=89'
            ]
        }
    }
    render() {
        const { swiperItem } = this.state
        const { IndexSwiper } = this.props
        const swiper = IndexSwiper.length > 0 ? (IndexSwiper.map((item, index) => {
            return <div key={index}><a href=""><img src={item.imageUrl} alt="" /></a></div>
        })) : (<div><h2>Loading</h2></div>)
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