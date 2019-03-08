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

    render(){
        return(
            
            <div className="Courses">                
                <Banner/>
                <TabsElement/>
            </div>
           
        )
        
    }
}

export default CoursesPage