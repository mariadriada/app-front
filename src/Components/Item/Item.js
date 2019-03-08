import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ExpandMore from '@material-ui/icons/ExpandMore';

import './Item.scss'


class Item extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            isActive: false,  
            content: this.props.content ,
                    
        }
       
    }   

    componentDidUpdate(prevProps, prevState, snapshop) {
        console.log('==================', prevState, snapshop)
    }

  

    // Control menu option is clicked
    handleClick = (e) => {
        e.preventDefault();  
        
        this.setState({
            isActive: true,
            contador: this.contador= this.contador++
        })
        this.setState({
            isActive: true
        })
        
        this.clearActivedItems()  
        
        this.setState({
            isActive: !this.state.isActive  
        })
        console.log('click', this.state.isActive)
        
        //if (this.state.isActive)
            this.props.component(
                this.state.isActive ? this.state.content : ''
            )
            console.log('component of item', this.state)
    };

    // Clear class active of all menu items
    clearActivedItems() {
        let options = [] 
        options = document.getElementsByClassName('item')
        for(let item of options){
            item.classList.remove('item-active')
        }
    }
    
    render(){
        let className = 'item';
        if (this.state.isActive) {
            className += ' item-active';
        }
        return ( 
            <div className="item-link">
                <a href="#" onClick={this.handleClick.bind(this)} className={className}>
                    { this.props.name }
                </a>
                { this.props.expand ? <ExpandMore className="expand" /> : '' }                
            </div>
        )
    }    
}

Item.prototypes = {
    isActive: PropTypes.bool,
}

Item.defaultProps = {
    isActive: false
}

export default Item