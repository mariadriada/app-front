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
                    id: 1,
                    title: 'Course Type',
                    options: ['Self paced', 'Live'],
                    value: 'Self paced',
                    viewMore: false
                },
                {
                    id: 2,
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
                    id: 3,
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
                            key={item.id}
                            title={item.title} 
                            options={item.options}
                            value={item.value}
                            viewMore={item.viewMore}
                            ></Selector>
                        )
                    })
                }
            </div>            
        )
    }
}