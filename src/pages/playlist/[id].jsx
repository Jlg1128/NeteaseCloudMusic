import React, { Component } from 'react'
import { connect } from 'umi'
class Playlistinfo extends Component {
	state = {
		playlistid: 1232
	}
	getplaylistid = () => {
		console.log(this.props);

		let { playlistid } = this.props.match.params
		this.setState({ playlistid })
	}
	render() {
		return (
			<div>
				<button onClick={this.getplaylistid}>点我</button>
				<h1>{this.state.playlistid}</h1>
			</div>
		)
	}
}


export default connect()(Songinfo)