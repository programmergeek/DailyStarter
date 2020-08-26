import React from 'react'
import './Weather.css'

class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            useCelcius: true,
        }
        this.changeUnit = this.changeUnit.bind(this)
    }

    //Method called when button is clicked
    changeUnit(){
        if(this.state.useCelcius == true){
            this.setState({useCelcius: false})
        }else{
            this.setState({useCelcius:true})
        }
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