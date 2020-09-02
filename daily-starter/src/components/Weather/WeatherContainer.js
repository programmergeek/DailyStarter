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
            city: 'Gaborone',
            temp: ''
        }
        this.apiCall = this.apiCall.bind(this)
    }
//Data retrieval from API
    componentDidMount(){
        this.apiCall(this.state.city)
    }

    apiCall(newCity){
        //Method is called when a new city is chosen
        axios.get(`https://api.weatherapi.com/v1/current.json?key=bd13e35f88e349ee8e773329202408&q=${newCity}`).then(res =>{
            this.setState({data: res.data})
        })

    }

//Update information 

    update(city){
        setInterval(() => {
            this.apiCall(city)
        }, 900000);
    }

//update state 'city'

    updateCity(newCity){
        this.setState({
            city: newCity
        })
    }

    //updates state temp when input is entered in text field
    handleChange(event){
        this.setState({
            temp: event.target.value
        })
    }

    onSubmit(){
        this.updateCity(this.state.temp)
        this.apiCall(this.state.city)
    }

//render
    render(){
        this.update(this.state.city)
        return (
        <div>
            <div>
                <input onChange = {this.handleChange} type="text" value={this.state.temp} />
                <button onClick={this.onSubmit}> Submit </button>
            </div>
            <Weather currentData = {this.state.data.current} city = {this.state.city}/>
        </div>
        )
    }
}

export default WeatherContainer