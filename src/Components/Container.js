import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar'
import ListGroup from './ListGroup'
import Search from './Search'
import axios from 'axios'
import Movie from './Movie'
import Details from './Details'
import ComingSoon from './CominSoon'
import TopTen from './TopTen'
import BoxOffice from './BoxOffice'
import Categories from './Categories'
import NotFound from './NotFound'


class Container extends Component {
    constructor(props){
        super()
        this.state={
            movie:"",
            details:null,
            apiKey:"",
            isLoading:false
        }
    }
    componentDidMount(){
        this.setState({apiKey:"k_2hco2jzn"})
    }

    searchMovie=(movieName)=>{
        if(movieName !==""){
            this.setState({isLoading:true})
        axios.get(`https://imdb-api.com/en/API/Search/${this.state.apiKey}/${movieName}`)
            .then(res=>{
                if(res.data){
                    this.setState({movie:res.data.results[0],isLoading:false})  
                }
            })
            
                setTimeout(()=>{
                    if(this.state.movie !==undefined){
                    axios.get(`https://imdb-api.com/API/Ratings/${this.state.apiKey}/${this.state.movie.id}`)
                    .then(res=>{
                        this.setState({
                            details:res.data
                        })       
                })}else{
                    alert("Movie Not Found")
                }
                },1500)
            
            
        }else{
            
        }
        
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <div className="container my-2">
                    <div className="row">
                        <Route path="/" render={props=>(
                            <ListGroup {...props}/>
                        )} />
                            
                        <div className="col-md-9">
                            <Search searchMovie={this.searchMovie} />
                            {this.state.isLoading?<h6>Loading...</h6>:""}
                            <div className="row my-2">
                                <Switch>
                                    <Route exact path="/" render={props=>(
                                        <Movie movie={this.state.movie}/>
                                    )}/>
                                        <Route exact path="/details/:id" render={props=>(
                                            <Details image={this.state.movie.image} movieId={this.state.movie.id} details={this.state.details} />
                                        )} />
                                    <Route exact path="/comingsoon" render={props=>(
                                        <ComingSoon apiKey={this.state.apiKey} />
                                    )} />
                                    <Route exact path="/topten" render={props=>(
                                        <TopTen apiKey={this.state.apiKey} />
                                    )} />
                                    <Route exact path="/boxoffice" render={props=>(
                                        <BoxOffice apiKey={this.state.apiKey} />
                                    )} />
                                    <Route exact strict path="/categories/:category" render={props=>(
                                        <Categories {...props} />
                                    )} />
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Container
