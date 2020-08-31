import React from 'react'
import axios from 'axios'

class News extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : {
                news: {}
            }
        }
        this.getData = this.getData.bind(this)
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        //retrieves data from API
        axios.get('https://api.currentsapi.services/v1/latest-news?language=us&'+
        'apiKey=jXMOINjccFJR_ZPDQDp9vYxG9ONWf25asznwg52mt_2z1iCi').then(res => {
            this.setState({data: res.data})
        }).catch(error =>{
            return <h1>Could not get news reports.</h1>
        }
        )
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default News