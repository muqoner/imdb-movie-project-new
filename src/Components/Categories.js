import React, { Component } from 'react'
import axios from 'axios'
import MovieView from './movieView'



class Categories extends Component {
    constructor(props){
        super()
        this.state={
            movies:[],
            isLoading:false
        }
    }
    componentDidMount(){
        this.setState({isLoading:true})
        axios.get(`https://imdb-api.com/en/API/Keyword/k_2hco2jzn/${this.props.match.params.category}`)
            .then(res=>{
                this.setState({movies:res.data.items,isLoading:false})     
            })
    }
    componentWillReceiveProps(nextProps){
        this.setState({isLoading:true})
        axios.get(`https://imdb-api.com/en/API/Keyword/k_2hco2jzn/${nextProps.match.params.category}`)
            .then(res=>{
                this.setState({movies:res.data.items,isLoading:false})     
            })
    }
    render() {
        return (
            <div>
                {this.state.isLoading?<h6>Loading...</h6>:""}
                <MovieView isLoading={this.state.isLoading} keyWord={this.props.match.params.category} movies={this.state.movies} />
            </div>
        )
    }
}

export default Categories
