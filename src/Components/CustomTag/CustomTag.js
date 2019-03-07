import React, { Component } from 'react'

import ClockIcon from '@material-ui/icons/AccessTime';
import Computer from '@material-ui/icons/Computer';

import './CustomTag.scss'


export default class CustomTag extends Component {
    
    constructor(props){
        super(props)

        this.hours = null
        this.method = null
    }
    
    render(){
        return(
            <ul className="CustomTag">
                <li className="material-icons">
                <ClockIcon/>
                </li>
                <li>{ this.props.hours } hours</li>
                <li><Computer/></li>
                <li>{ this.props.method }</li>
            </ul>
        )
    }
}
