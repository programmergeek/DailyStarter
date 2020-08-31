import React from 'react'

class Time extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: '',
            time: ''
        }
    }

    setDate(){
        //returns a formated string for the date
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth()
        var day = date.getDay()
        return year+'/ '+(month+1)+'/ '+day
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Time