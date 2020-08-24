import React from 'react'
import './Weather.css'
import axios from 'axios'

// Connects to weather API to get current weather data
class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {
                location:{
                    
                },
                current:{

                }
            },
            city: 'Gaborone'
        }
    }

    componentDidMount(){
        this.apiCall(this.state.city)
    }

    apiCall(newCity){
        //Method is called when a new city is chosen
        axios.get(`http://api.weatherapi.com/v1/current.json?key=18dc0623507d4466ae7100225202308&q=${newCity}`).then(res =>{
            this.setState({data: res.data})
        })

    }

    update(){
        setInterval(this.apiCall(this.state.city), 1000)
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default Weather