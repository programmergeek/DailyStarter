import React from 'react'
import axios from 'axios'

class News extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : {
                articles: []
            }
        }
        this.getData = this.getData.bind(this)
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        //retrieves data from API
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ee017bdc09d942d8a9810c1e788f15b3').then(res => {
            this.setState({data: res.data})
        }).catch(error =>{
            return <h1>Could not get news reports.</h1>
        }
        )
    }

    render(){
        return(
            <div>
                {JSON.stringify(this.state.data)}
            </div>
        )
    }
}

export default News