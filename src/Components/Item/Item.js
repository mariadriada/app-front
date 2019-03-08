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
            name: ''                  
        }     
      
    }   
/*
    componentDidMount() {
        console.log('Componente a montar ')
    }

    componentDidUpdate(prevProps, prevState, snapshop) {
        console.log('==================', prevState, snapshop)
    }


    componentWillUnmount() {
        console.log('*********desmonta')
    }*/

    // Control menu option is clicked
    async handleClick (e) {
        e.preventDefault(); 
        
        this.clearActivedItems()  
        
        await this.setState({
            isActive: true  
        })
        // Update class
        document.querySelector(`#${this.state.name}`).classList.add('item-active')
        
        this.props.component(
            this.state.content
        )
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
        let idbtn = `${className}${this.props.id}`
        this.state.name = idbtn
        /*if (this.state.isActive) {
            className += ' item-active';
        }*/
        return (             
            <div className="item-link">
                <a href="#" onClick={this.handleClick.bind(this)} 
                className={className} id={idbtn}>
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