import React, { Component } from 'react'

import axios from 'axios'
import CustomTag from '../CustomTag/CustomTag'
import Reply from '@material-ui/icons/Reply';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses'
import SelectElement from '../Select/Select'
import SkipNext from '@material-ui/icons/SkipNext';
import SkipPrevious from '@material-ui/icons/SkipPrevious';
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
            filterActived: false,
            totalItems: null,
            currentPage: 1,
            nextPage: 2,
            prevPage: 1,

            pagination: []
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

        // Call to data API
        this.getCourses(this.state.currentPage)
    }

    // Filter courses
    searchCourse() {
        //Active the filter status
        this.setState({
            filterActived: true,
            courses: this.state.coursesInitial            
        })
        let textToSearch = this.state.searchBar.value

        // Start to seach when there are 2 letters or more writed in the search bar
        if (textToSearch.length < 2) {
            this.setState({
                courses: this.state.coursesInitial
            })
            // Show featured clourses
            this.showElement('#featured-container')
            return 
        }
        
        // Filtering courses in order to data entry 
        let filtered = this.state.courses.filter((data) => {
            console.log('haciendo operacion de filtro', data.name, textToSearch, data.name.indexOf(textToSearch))
            // Searching coincidences
            if (data.name.toLowerCase().indexOf(textToSearch.toLowerCase()) > -1)
            return data
            
        })

        // hidden featured courses
        this.hiddenElement('#featured-container')
        // Update state with filtered courses
        this.setState({
            courses: filtered
        })

    }

    // Request to courses API
    async getCourses(page) {
        let url = `
            https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=
            ${page}
            &pageSize=10&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27
        `
        console.log('bget new ', url)
        await axios.get(url)
        .then(res => {
            
            if (res.status === 200) {
                let items = JSON.stringify(res.data.items);                             
                let data = res.data.items.map((value) => {                      
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

                // Add cache of courses
                let pagination = this.state.pagination;
                pagination.push({
                    data
                })

                this.setState({
                    courses: data,
                    coursesInitial: data,
                    totalItems: res.data.totalItems,
                    pagination: pagination
                })

            }
        })
        console.log()
    }

    // When clicked prev button, search in chache data
    previous = () => {
        let page = this.state.currentPage
        page --   
        
        // If there not prev pages return
        if ( page <= 0 ) return

        // index of pagination for the page
        let currentP = page - 1        
        // Get the data courses to show
        let currentCourses = this.state.pagination[currentP].data       

         // If is the first page show featured courses
        if ( currentP == 0 )
        this.showElement('#featured-container')

        //Update state
        this.setState({
            currentPage: page,
            courses: currentCourses
        })

       
    }

    // When clicked next button, get from API data
    async next() {
        let page = this.state.currentPage +1       
        let nextP = this.state.nextPage +1      
               
        //Update state, clear state of courses
        this.setState({
            currentPage: page,
            nextPage: nextP,
            courses: [],            
        })

        // hidden featured courses
        this.hiddenElement('#featured-container')
        await this.getCourses(this.state.nextPage)
    }

    hiddenElement(name){
        let element = document.querySelector(name)
        element.style.display = 'none'
        element.style.visibility = 'hidden'
    }
    
    showElement(name){
        let element = document.querySelector(name)
        element.style.display = 'block'
        element.style.visibility = 'visible'
    }


    render() {
        let values = ['Relevance']
        return(
            
            <div>
                <div className="courses-pagination">
                    <div className="pagination">
                        <div>
                            <strong>Page {this.state.currentPage}</strong> of
                            <strong> {this.state.totalItems} </strong>                            
                        </div>
                        <div>
                            <SkipPrevious onClick={this.previous.bind(this)} className="btn"/>
                            <SkipNext onClick={this.next.bind(this)} className="btn"/>
                        </div>
                    <SelectElement className="select3"
                        id="select3"    
                        name="select3"
                        valueDefault="Relevance"
                        values={values}
                        >
                    </SelectElement>
                    </div>
                    <div id="featured-container">
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