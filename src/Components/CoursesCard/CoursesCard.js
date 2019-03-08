import React, { Component } from 'react'

import axios from 'axios'
import CustomTag from '../CustomTag/CustomTag'
import Reply from '@material-ui/icons/Reply';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses'
import './CoursesCard.scss'


export default class CoursesCard extends Component {
   
    constructor() {
        super()

        this.state = {
            features: [],
            courses: [],
            coursesInitial: [],
            totalItems: 0,
            searchBar: null,
            filterActived: false
        }

        this.courseToSearch = ''
    }

    componentDidMount() {
        console.log('componentDidMount')

        // Capture the filter element
        let element = document.getElementById('inputSearch')
        this.setState({searchBar: element})
        console.log('llega elemento search a card ', element)
        // Connect keyuo event to handler function
        element.addEventListener('keyup', this.searchCourse.bind(this))

        // Calls to data API
        this.getFeaturedCourses()
        this.getCourses()
    }

    // Filter courses
    searchCourse() {
        //Active the filter status
        this.setState({
            filterActived: true,
            courses: this.state.coursesInitial            
        })
        console.log('buscar el curso aca ', this.state.searchBar.value)
        let textToSearch = this.state.searchBar.value

        console.log('leng', textToSearch.length)

        // Start to seach when there are 2 letters or more writed in the search bar
        if (textToSearch.length < 2) {
            this.setState({
                courses: this.state.coursesInitial
            })
            return 
        }

        console.log('continua')
        
        // Filtering courses in order to data entry 
        let filtered = this.state.courses.filter((data) => {
            console.log('haciendo operacion de filtro', data.name, textToSearch, data.name.indexOf(textToSearch))
            // Searching coincidences
            if (data.name.toLowerCase().indexOf(textToSearch.toLowerCase()) > -1)
            return data
            
        })

        console.log('Cursos filtrados ', filtered)
        // Update state with filtered courses
        this.setState({
            courses: filtered
        })

    }

    // Request to courses API
    getCourses() {
        axios.get('https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27')
        .then(res => {
            
            if (res.status === 200) {
                console.log(res.status, res.data)

                let items = JSON.stringify(res.data.items);

                console.log('items', items)

                             
                let data = res.data.items.map((value) => {

                    console.log('Recorriendo', res.data.items)
                    //let coursePublication = value.coursePublication 

                    //console.log('courses', value)
                    return {
                        name: value.course.name,
                        type: value.course.type,
                        deliveryMethod: value.course.deliveryMethod,
                        totalHours: value.totalHours,
                        hasPrice: value.hasPrice,
                        price: value.price,
                        provider: value.course.provider.name,                        
                        isFree: value.isFree
                    }               
                })

               console.log('result ', data)

                this.setState({
                    courses: data,
                    coursesInitial: data
                })

            }
        })
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

                    //console.log('courses', value)
                    return {
                        name: coursePublication.course.name,
                        totalHours: coursePublication.totalHours,
                        provider: coursePublication.course.provider.name,
                        img: coursePublication.course.featuredBanner,
                        isFree: coursePublication.course.isFree
                    }                 
                })

                this.setState({
                    features: data
                })

            }
        })
    }

    render() {
        return(
            
            <div>
                <div className="courses-pagination">
                    <div className="featured-container">
                        <FeaturedCourses/>
                    </div>
                    {   
                        this.state.courses.map((item, i) => {   
                            return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                            <div key={i} className="CoursesCard">                            
                                <div className="information-container">
                                    <h2 className="name">{ item.name }</h2>
                                    <h3 className="provider">{ item.provider }</h3>
                                    <CustomTag 
                                        hours={item.totalHours}
                                        method={item.deliveryMethod.description}
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
                            )
                        })
                    }
                    </div>
                </div>
            
        
        )
    }
}