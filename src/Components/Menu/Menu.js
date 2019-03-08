
import React, { Component } from 'react'

import Button from '@material-ui/core/Button';

import Logo from '../Logo/Logo'
import Item from '../Item/Item'
import CoursesPage from '../../Pages/CoursesPage/CoursesPage'

import './Menu.scss'


class Menu extends Component {

    constructor(){
        super() 
        
        this.state = { 
            nameLogo: 'ce broker',
           
            menuOptions: [
                { 
                    id: 1, 
                    name: 'Features', 
                    isActive:false, 
                    expand: false,
                    content: <h1>Dinamic content</h1>
                },
                { 
                    id: 2, 
                    name: 'Plans', 
                    isActive:false, 
                    expand: false,
                    content: <h1>Dinamic content 2</h1>
                },
                { 
                    id: 3, 
                    name: 'Organizations', 
                    isActive:false, 
                    expand: true,
                    content: <h1>Dinamic content 3</h1>
                },
                { 
                    id: 5, 
                    name: 'Browse courses', 
                    isActive:true, 
                    expand: false,
                    content: <CoursesPage/>
                },
                { 
                    id: 4, 
                    name: 'Support', 
                    isActive:false, 
                    expand: false,
                    content: <h1>Dinamic content 4</h1>
                }
            ],
            component:'',
        }
    }

    // Change of component to show in order to clicked option
    onChange(){
        this.props.changePage(this.state.component)
    }

    /*
     Set component state when menu option is selected
     The component is showing in the dinamic container of App.js
    */
    setComponent(newComponent) {
        this.setState({
            component: newComponent
        })

        //console.log('nuevo componente', this.state.component)
        this.onChange()
    }

    //Get item element
    // TODO: Expand items when be click to expanded option
    getRenderItem(item) {
        let itemElement =  
                    <Item key={item.id}
                        name = { item.name } 
                        isActive = { item.isActive }
                        content = { item.content }
                        component = { this.setComponent.bind(this) }
                        expand = { item.expand }                       
                    ></Item>                
               
        return itemElement
    }

    render() {

        // Fill menu items, if item is expanded put the respective icon         
        let listItems = this.state.menuOptions.map((item) => { 
            return this.getRenderItem(item)
        })

        return ( 
            <div className="Menu">
                <div className="logo-container"><Logo name={this.state.nameLogo} /></div>
                <div className="items-container">{ listItems }</div>
                <div className="btns-container">
                    <Button variant="outlined" className="btnSignIn">
                        Sign in
                    </Button>
                    <Button variant="contained" className="btnTrial">
                        7 days trial
                    </Button>
                </div>
            </div>         
           
        )
    }
}

export default Menu