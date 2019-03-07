
import React, { Component } from 'react'

import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import Logo from '../Logo/Logo'
import Item from '../Item/Item'
import Courses from '../Courses/Courses'

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
                    content: <Courses/>
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
     The component is showing in the dinamic container of App.hs
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
        let itemElement =  <div key={item.id} className="div-item">
                    <Item 
                        name={item.name} 
                        isActive={item.isActive}
                        content={item.content}
                        component={this.setComponent.bind(this)}
                />
                { item.expand ? <ExpandMore /> : '' }
                </div>
        return itemElement
    }

    render() {

        // Fill menu items, if item is expanded put the respective icon         
        let listItems = this.state.menuOptions.map((item) => { 
            return this.getRenderItem(item)
        })

        return ( 
            <div className="Menu">
                <Logo name={this.state.nameLogo} />
                { listItems }
                <Button variant="outlined" className="btnSignIn">
                    Sign in
                </Button>
                <Button variant="contained" className="btnTrial">
                    7 days trial
                </Button>
            </div>         
           
        )
    }
}

export default Menu