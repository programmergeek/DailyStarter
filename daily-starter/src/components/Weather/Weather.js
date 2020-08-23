import React from 'react'
import './Weather.css'
import axios from 'axios'

// Connects to weather API to get current weather data
class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {},
            city: 'New York'
        }
    }

    componentDidMount(){
        axios.get(`http://api.weatherapi.com/v1/current.json?key=18dc0623507d4466ae7100225202308&q=${this.state.city}`).then(res =>{
            this.setState({data: res.data})
        })
    }

    apiCall(newCity){
        //Method is called when a new city is chosen
        axios.get(`http://api.weatherapi.com/v1/current.json?key=18dc0623507d4466ae7100225202308&q=${newCity}`).then(res =>{
            this.setState({data: res.data})
        })

    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default Weather