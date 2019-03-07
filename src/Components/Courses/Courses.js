import React, { Component } from 'react'

import Banner from '../Banner/Banner'
import TabsElement from '../Tabs/Tabs'

import './Courses.scss'

class Courses extends Component {


    render(){

        return(
            <div className="Courses">
                <Banner/>
                <TabsElement/>
            </div>
           
        )
        
    }
}

export default Courses