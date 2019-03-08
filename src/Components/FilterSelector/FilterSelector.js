import React, { Component } from 'react'
import Selector from './Selector/Selector'
import FilterList from '@material-ui/icons/FilterList';

import './FilterSelector.scss'

export default class FilterSelector extends Component {

    constructor(props) {
        super(props)

        this.state = {
            select: [
                {
                    title: 'Course Type',
                    options: ['Self paced', 'Live'],
                    value: 'Self paced',
                    viewMore: false
                },
                {
                    title: 'Delivery type',
                    options: [
                        'Any delivery type', 
                        'Computer-based training',
                        'Correspondence',
                        'Mailed material'
                    ],
                    value: 'Any delivery type',
                    viewMore: true
                },
                {
                    title: 'Subject area',
                    options: [
                        'Any subject area', 
                        'HIV/AIDS',
                        'End-of-life Care and Palliative Health Care',
                        'Domestic violence'
                    ],
                    value: 'Any subject area',
                    viewMore: true
                }
            ]
        }
    }

    render(){
        return(
            <div className="FilterSelector">
            <div id="title">
            <FilterList></FilterList>
                FILER COURSE RESULTS
            </div>
                {
                    this.state.select.map((item) => {
                        return (
                         <Selector 
                            title = { item.title } 
                            options = { item.options }
                            value = { item.value }
                            viewMore ={ item.viewMore }
                            ></Selector>
                        )
                    })
                }
            </div>
            
        )
    }
}