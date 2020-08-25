import React from 'react'
import './Weather.css'

class Weather extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1> {this.props.city} <img src={this.props.currentData.condition.icon} 
                    width='80px'/>
                </h1>
                <h3> {this.props.currentData.condition.text} | {this.props.currentData.temp_c}<span>&#176;</span>C</h3>
            </div>
        )
    }
}

export default Weather