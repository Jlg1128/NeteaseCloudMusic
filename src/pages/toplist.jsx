import React from 'react'
import Nav from '../layouts/publiccom/nav'
import Fixnav from '../layouts/publiccom/fixnav'
import Head_nav from '../layouts/publiccom/head_nav'
import Foot from '../layouts/publiccom/foot'
import TopItem from '../layouts/toplist/topitem'
import {connect} from 'umi'

class Toplist extends React.Component{

    componentDidMount(){

        this.props.dispatch({
            type:"toplistinfo/getClickindex",
            payload:1
        })

    }
    render(){
   
        const {clickindex} = this.props.listinfo.toplistinfo
        return <div>
                <Nav/>

                <Head_nav clickIndex={1}/>
                <Fixnav />
                {/* <Foot /> */}
                <TopItem toplist={this.props.listinfo.toplistinfo.toplist[0]} clickIndex={clickindex} dispatch={this.props.dispatch}  />
              {this.props.children}
               </div>
    }
}
function mapStateToProps(state){
  
    return {listinfo:state}
}
export default connect(mapStateToProps)(Toplist)