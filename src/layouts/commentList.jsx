// import React from 'react'
// import {connect} from 'umi'
// import CommentItem from '../pages/commentItem'

// class CommentList extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             a:""
//         }

//     }
//     link=()=>{
//         const a=this.props.history.location.pathname
//         const b= a.slice(0,8)
//         this.props.history.push(b)
 
//     }
//     render(){
//         const  {CommentList}=this.props.commentList.commentHandel
//         const {dispatch} = this.props
//         return <div>   {this.props.children}
//             <CommentItem dispatch={dispatch} CommentList={CommentList}/>
//                  <button onClick={this.link}>history</button>
//                </div>
//     }
// }
// function mapStateToProps(state){
//     return {commentList:state}
// }
// export default connect(mapStateToProps)(CommentList)