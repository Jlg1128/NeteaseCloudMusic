/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import { connect, request } from 'umi';

import { getImages } from '../../../service/getmock';
import Lazyload from '../../../components/common/lazyload/lazyload';
import '../lazy.less';

// function getimage(){
//     return request('http://localhost:8000/api/images')
//     .then(res=>{
//         return res
//     })
// }
class Userinfo extends Component {
	state = {
		list: [],
	}

	componentDidMount() {
		const list = [];
		getImages()
			.then((res) => {
				// eslint-disable-next-line no-plusplus
				for (let i = 0; i < res.Images.list.length; i++) {
					list.push(res.Images.list[i].src);
				}
				this.setState({
					list,
				});
			});
	}

	render() {
		console.log(this.state.list);
		return (
  <div>
    {this.state.list.map((item) => <div style={{ margin: 50, width: 10, height: 10 }}>
      {' '}
      <Lazyload
						state={{
							src: item,
							alt: '/static/1.jpg',
							BoxClassName: 'lazyload-box', // 这是容器的类名
							ImgClassName: 'lazyload-img', // 这是img的类名
						}}
					/>
    </div>)}
  </div>
		);
	}
}
export default connect()(Userinfo);
