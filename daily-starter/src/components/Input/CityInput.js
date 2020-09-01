import React from 'react'

class CityInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            city : ''
        }
    }


    //updates value of state city when a change occurs in the input field
    handleChange(event){
        this.props.updateCity(event.target.value)
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default CityInput