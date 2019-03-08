import React, { Component } from 'react'

import axios from 'axios'
import './FeaturedCourses.scss'

import CustomTag from '../CustomTag/CustomTag'
import Reply from '@material-ui/icons/Reply';
import Button from '@material-ui/core/Button';


export default class FeaturedCourses extends Component {
   
    constructor() {
        super()

        this.state = {
            featured: [],
            url: 'https://storage.cebroker.com/CEBroker/'
        }

       // this.url = 'https://storage.cebroker.com/CEBroker/'
    }

    componentDidMount() {
        console.log('componentDidMount featuresd')

        // Call to data API
        this.getFeaturedCourses()
    }
 
    // Request to Featured courses API
    getFeaturedCourses() {
        axios.get('https://api.cebroker.com/v2/featuredCoursesProfession?profession=36')
        .then(res => {
            
            if (res.status === 200) {
                console.log(res.status, res.data)
                let dataCourse = {}
                let data = res.data.map((value) => {
                    let coursePublication = value.coursePublication 

                    return {
                        name: coursePublication.course.name,
                        totalHours: coursePublication.totalHours,
                        provider: coursePublication.course.provider.name,
                        //img: coursePublication.course.featuredBanner,
                        img: this.getUrl(coursePublication.course.featuredBanner),
                        isFree: coursePublication.course.isFree
                    }                 
                })

                this.setState({
                    featured: data
                })

            }
        })
    }

    // Concat Url to img
    getUrl = (img) => {
        console.log('geturl')
        //const url =         
        return `${this.state.url}${img}`
        //<img src={item.img} alt="img"></img>
    }

    render() {
        return(
            
            <div>
            {   
                this.state.featured.map((item, i) => {   
                    return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    <div key={i} className="CoursesFeatured">                   
                        <div className="img-container">
                            
                            <img src={item.img} alt="img"></img>
                            
                        </div>
                        <div className="side">
                        <div className="information-container">
                            <h2 className="name">{ item.name }</h2>
                            <span className="txtFeatured">FEATURED</span>
                   
                            <h3 className="provider">{ item.provider }</h3>
                            <CustomTag 
                                hours={item.totalHours}
                                method="Computer-Based Training"
                                />
                        </div>
                        <div className="price-container">
                                <div className="text-price">
                                    { item.isFree ? <span>Free</span> : 
                                    <span>$ {item.price}</span> }
                                </div>
                                <div>
                                    <div className="icon-arrow">
                                        <Reply className="icon-3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div> 
                    )
                })
            }
            </div>
            
        
        )
    }
}