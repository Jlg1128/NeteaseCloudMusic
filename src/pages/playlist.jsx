import React from 'react'
import Nav from '../layouts/publiccom/nav'
import Fixnav from '../layouts/publiccom/fixnav'
import Head_nav from '../layouts/publiccom/head_nav'
import Foot from '../layouts/publiccom/foot'
import Playlistmain from '../layouts/playlist/playlistmain'

export default class Playlist extends React.Component{
    render(){
        return <div>
                <Nav/>

                <Head_nav/>
                <Fixnav />
                {/* <Foot /> */}
                <Playlistmain />
               </div>
    }
}