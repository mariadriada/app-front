import React, { Component } from 'react'

import Banner from '../../Components/Banner/Banner'
import TabsElement from '../../Components/Tabs/Tabs'


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