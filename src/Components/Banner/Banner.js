import React, { Component } from 'react'


import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import './Banner.scss'

import SelectElement from '../Select/Select'
import SearchBar from '../SearchBar/SearchBar'

class Banner extends Component {

    constructor(){
        super()
        this.state = {
            city: 'Florida',
            enterprise: 'Medical Doctor',
            labelWidth: 0,
        }
    }

    handleChange = event => {
        console.log('event', event.target)
        this.setState({ [event.target.name]: event.target.value });
    };  

    render(){
        let options1 = ['Florida', 'Other']
        let options2 = ['Medical Doctor', 'Other']
        return(
            <div className="Banner">

                <div class="block">
                    <label>Find CE for</label> 

                    <SelectElement
                        id="select1"    
                        name="select1"
                        valueDefault="Florida"
                        values={options1}
                    />
                    <SelectElement
                        id="select2"    
                        name="select2"
                        valueDefault="Medical Doctor"
                        values={options2}
                    />
                </div>

                <div class="block">
                    <SearchBar/>
                </div>



            </div>
        )        
    }
}

export default Banner