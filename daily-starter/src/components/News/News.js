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
                        descripion: '',
                        url: '',
                        urlToImage: ''

                    },
                    {
                        source: {},
                        author: '',
                        title: '',
                        descripion: '',
                        url: '',
                        urlToImage: ''

                    },
                    {
                        source: {},
                        author: '',
                        title: '',
                        descripion: '',
                        url: '',
                        urlToImage: ''

                    },
                    {
                        source: {},
                        author: '',
                        title: '',
                        descripion: '',
                        url: '',
                        urlToImage: ''

                    },
                    {
                        source: {},
                        author: '',
                        title: '',
                        descripion: '',
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
                <div>
                    <img src={this.state.data.articles[x].urlToImage} style={{
                        width: 150,
                        height: 100
                    }} alt="image"/>
                    <h3 className="Headline"> {this.state.data.articles[x].title} </h3>
                    <h5 className="author"> {this.state.data.articles[x].author} </h5>
                    <br/>
                    <p className="description" > {this.state.data.articles[x].descripion} </p>
                    <a href={this.state.data.articles[x].url}>Source</a>
                    <br/>
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