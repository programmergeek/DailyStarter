import React from 'react'

class Time extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: '',
            time: ''
        }
    }

    componentDidMount(){
        this.setState({
            date: this.setDate(),
            time: this.setTime()
        })
    }

    setDate(){
        //returns a formated string for the date
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth()
        var day = date.getDate()
        return year+'/'+(month+1)+'/'+day
    }

    setTime(){
        //returns current time 
        var time = new Date()
        var hour = time.getHours()
        var minute = time.getMinutes()
        var seconds = time.getSeconds()
        return ' '+hour+':'+minute+':'+seconds
    }

    update(){
        setInterval(()=>{
            var time = this.setTime()
            this.setState({time: time})
            if(time == '0:0:0'){
                this.setState({date:this.setDate()})
            }
        }, 1000)
    }

    render(){
        this.update()
        return(
            <div>
                {this.state.date}
                {this.state.time}
            </div>
        )
    }
}

export default Time