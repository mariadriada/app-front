import React, { Component } from 'react'

import Banner from '../Banner/Banner'
import TabsElement from '../Tabs/Tabs'


import './CoursesPage.scss'

class CoursesPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            textToSearch: ''
        }
    }

    handleSearchNew = (text) => {
        console.log('llega palabra a courses', text)
        this.setState({
            textToSearch: text
        })
    }

    render(){
        return(
            
            <div className="Courses">                
                <Banner textTo={this.handleSearchNew.bind(this)}/>
                <TabsElement textToSearch={this.state.textToSearch}  />
            </div>
           
        )
        
    }
}

export default CoursesPage