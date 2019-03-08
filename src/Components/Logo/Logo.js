import React, { Component } from 'react'
import './Logo.scss'
import logoimg from '../../static/img/logo.jpg'

class Logo extends Component {
    render() {
        return ( 
            <div className="Logo">
                <img src={logoimg} alt="logo"/>
                <label>{ this.props.name }</label>
            </div>  
        )
    }
}

export default Logo