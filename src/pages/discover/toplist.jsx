import React from 'react'
import Nav from '../../components/common/nav/nav'
import ScrollTop from '../../components/common/scrolltop/scrolltop'
import Head_nav from '../../components/common/head_nav/head_nav'
import Foot from '../../components/common/foot/foot'
import TopItem from '../../components/toplist/topitem'
import {connect } from 'umi'

class Toplist extends React.Component{
    render(){

        const {clickindex} = this.props.listinfo

        return <div>
                <Nav/>

                <Head_nav clickIndex={1}/>
      
                {/* <Foot /> */}
                <TopItem toplist={this.props.listinfo.toplist[0]} clickIndex={clickindex} dispatch={this.props.dispatch}  />
              {this.props.children.props.children}
               </div>
    }
}
function mapStateToProps(state){
  
    return {listinfo:state.toplistinfo}
}
export default connect(mapStateToProps)(Toplist)