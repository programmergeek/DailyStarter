import React from 'react'
import './Weather.css'
import axios from 'axios'

// Connects to weather API to get current weather data
class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Weather