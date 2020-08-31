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
        this.update()
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
        var hour = time.getHours()<10 ? '0'+time.getHours():time.getHours()
        var minute = time.getMinutes()<10 ? '0'+time.getMinutes():time.getMinutes()
        var seconds = time.getSeconds()<10 ? '0'+time.getSeconds():time.getSeconds()
        
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
        return(
            <div>
                {this.state.date}
                {this.state.time}
            </div>
        )
    }
}

export default Time