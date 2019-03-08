import React, { Component } from 'react'
import SelectElement from '../Select/Select'
import SearchBar from '../SearchBar/SearchBar'
import './Banner.scss'

class Banner extends Component {

    constructor(props){
        super(props)

        this.state = {
            city: 'Florida',
            enterprise: 'Medical Doctor',
            labelWidth: 0,
            textTo: ''
        }
    }

    handleChange = event => {        
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        let options1 = ['Florida', 'Other']
        let options2 = ['Medical Doctor', 'Other']
        return(
            <div className="Banner">

                <div className="block">
                    <label>Find CE for a </label> 

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

                <div className="block">
                    <SearchBar/>
                </div>
            </div>
        )        
    }
}

export default Banner