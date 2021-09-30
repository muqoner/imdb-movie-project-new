import React, { Component } from 'react'
import axios from 'axios'
import MovieView from './movieView'

class TopTen extends Component {
    constructor(prop){
        super();
        this.state={
            topTen:[]
        }
    }
    componentDidMount(){
        axios.get(`https://imdb-api.com/en/API/Top250Movies/${this.props.apiKey}`)
            .then(res=>{
                const newArray=[]
                for(let i=0;i<10;i++){
                    newArray.push(res.data.items[i])
                }
                this.setState({topTen:newArray}) 
            })
    }
    render() {
        return (
            <div>
                <MovieView movies={this.state.topTen} />
            </div>
        )
    }
}

export default TopTen
