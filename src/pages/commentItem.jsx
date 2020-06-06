import React from 'react'
import {Button,Modal,Switch} from 'antd'
import {history} from 'umi'
import './index.less'
export default class CommentItem extends React.Component{
    constructor(){
        super()
        this.state={
            comment:'',
            value:'',
            visible:false,
            loading:false,
            disabled: true,
        }
    }
    gotoindex=(props)=>{
 
        history.push('/')
    }
    getComment=(e)=>{
        const newcomment=e.target.value
        this.setState({comment:newcomment,value:newcomment})
    }
    sendComment=()=>{
        this.props.dispatch({
            type:'commentHandel/addCommentAsync',
            payload:{comment:this.state.comment}
        }),
        this.setState({value:''})
}
    sendCommentAsync=()=>{
        this.props.dispatch({
            type:'commentHandel/addCommentAsync',
            payload:{comment:this.state.comment}
        })
    }
    show=()=>{
       this.setState({visible:true})
    }
    hide=()=>{
        this.setState({visible:false})
    }
    handleOk=()=>{
        this.setState({loading:true})
        setTimeout(()=>{
          this.setState({loading:false,visible:false})
        },2000) 
    }
    handleCancel=()=>{
        this.setState({visible:false})
    }
    toggle = () => {
        this.setState({
          disabled: !this.state.disabled,
        });
      };
    render(){
        const {CommentList}=this.props
         return <div>
          {CommentList.map((item,index)=><h1 key={index}>{item.comment}</h1>)}
         <h1>请添加评论</h1>
         <input type='text' placeholder='请输入评论内容' onChange={this.getComment} value={this.state.value}/>
         <Button onClick={this.sendComment}>提交</Button>   
         <Button onClick={this.sendCommentAsync}>异步提交</Button>
         <Button onClick={this.gotoindex}>123</Button>
         <Button onClick={this.show}>确定</Button>  
         <div className='div1'>

         </div> 
         <div>
        <Switch disabled={this.state.disabled} defaultChecked />
        <br />
        <Button type="primary" onClick={this.toggle}>
          Toggle disabled
        </Button>
      </div>
         <div className="div2">12321</div>    
         <Modal
          title='确定要删除吗'
          visible={this.state.visible}
          footer={[
         <Button key="back" onClick={this.handleCancel}>
           Return
         </Button>,
         <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
           Submit
         </Button>,
                         ]}>
          <p>asdsad</p>
          <p>asdsad</p>
          <p>asdsad</p>
          </Modal>
         </div>
    }
}