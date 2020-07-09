import React, { Component } from 'react'
import cssobj from './alert.less'
import './alert.less'

export default class alert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: props.visible,
            text: '请输入内容'
        }
    }
    componentWillReceiveProps(nextProps) {

        this.setState({ visible: nextProps.visible })
        { (nextProps.text) ? this.setState({ text: nextProps.text }) : '' }

        if (nextProps.visible === true) {
            setTimeout(() => {
                this.setState({ visible: false })
            }, 1500)
        }

    }
    handleOk = () => {
        this.props.onOk()
    };
    render() {
        const { visible, text } = this.state
        return <div style={{ display: visible == true ? 'block' : 'none' }} className={cssobj.modal}>
            <span>{text}</span>

        </div>
    }
}