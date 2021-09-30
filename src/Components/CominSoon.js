import React, { Component } from 'react'
import axios from 'axios'
import MovieView from './movieView'

class CominSoon extends Component {
    constructor(props){
        super();
        this.state={
            movies:[]
        }
    }
    componentDidMount(){
        axios.get(`https://imdb-api.com/en/API/ComingSoon/${this.props.apiKey}`)
            .then(res=>{
                this.setState({movies:res.data.items})
            })
    }
    render() {
        return (
            <>
                <MovieView movies={this.state.movies} />  
            </>
        )
    }
}

export default CominSoon
