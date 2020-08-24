import React from 'react'
import Weather from './Weather'


class WeatherContainer extends React.Component{
    constructor(props){
        super(props)
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
        axios.get(`http://api.weatherapi.com/v1/current.json?key=bd13e35f88e349ee8e773329202408=${newCity}`).then(res =>{
            this.setState({data: res.data})
        })

    }

    render(){
        return <Weather/>
    }
}

export default WeatherContainer