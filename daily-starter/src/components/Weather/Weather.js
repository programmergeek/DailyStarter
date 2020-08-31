import React from 'react'
import './Weather.css'
import Time from '../Time/Time'

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
                <h3> {this.props.currentData.condition.text} | {this.state.useCelcius? this.props.currentData.temp_c:this.props.currentData.temp_f}
                <span>&#176;</span>{this.state.useCelcius? 'C':'F'}</h3>
                <Time/>
                <button onClick={this.changeUnit}>Change unit</button>
            </div>
        )
    }
}

export default Weather