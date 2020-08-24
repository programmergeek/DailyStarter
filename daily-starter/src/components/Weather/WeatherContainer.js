import React from 'react'
import Weather from './Weather'
import axios from 'axios'

class WeatherContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {
                location:{
                    localtime: ''
                },
                current:{
                    temp_c: '',
                    temp_f: '',
                    condition: {}
                }
            },
            city: 'Gaborone'
        }
        this.apiCall = this.apiCall.bind(this)
    }
//Data retrieval from API
    componentDidMount(){
        this.apiCall(this.state.city)
    }

    apiCall(newCity){
        //Method is called when a new city is chosen
        axios.get(`https://api.weatherapi.com/v1/current.json?key=bd13e35f88e349ee8e773329202408&q=${this.state.city}`).then(res =>{
            this.setState({data: res.data})
        })

    }


    render(){
        return JSON.stringify(this.state.data.location.localtime)
    }
}

export default WeatherContainer