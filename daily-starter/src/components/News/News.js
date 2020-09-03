import React from 'react'
import axios from 'axios'

class News extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : {
                articles: [
                    {
                        source: {},
                        author: '',
                        title: '',
                        description: '',
                        url: '',
                        urlToImage: ''

                    },
                    {
                        source: {},
                        author: '',
                        title: '',
                        description: '',
                        url: '',
                        urlToImage: ''

                    },
                    {
                        source: {},
                        author: '',
                        title: '',
                        description: '',
                        url: '',
                        urlToImage: ''

                    },
                    {
                        source: {},
                        author: '',
                        title: '',
                        description: '',
                        url: '',
                        urlToImage: ''

                    },
                    {
                        source: {},
                        author: '',
                        title: '',
                        description: '',
                        url: '',
                        urlToImage: ''

                    }
                ]
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

    list(){
        var list = []
        for (var x = 0; x < 5; x++){
            list.push(
                <div style={{margin: 20, width: '26rem'}} >
                    <div class="card text-left">
                      <img class="card-img-top" src={this.state.data.articles[x].urlToImage} alt="image"/>
                      <div class="card-body">
                        <h4 class="card-title"> {this.state.data.articles[x].title} </h4>
                        <h6 class="card-subtitle mb-2 text-muted"> {this.state.data.articles[x].author} | {this.state.data.articles[x].source.name} </h6>
                        <p class="card-text"> {this.state.data.articles[x].description} </p>
                        <a href={this.state.data.articles[x].url} class="card-link"> Source </a>
                      </div>
                    </div>
                </div>
            )
            console.log(list)
        }
        return list
    }

    render(){
        return(
            <div>
                {this.list()}
            </div>
        )
    }
}

export default News