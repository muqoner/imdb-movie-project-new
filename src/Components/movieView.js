import React, { Component } from 'react'


export class movieView extends Component {
    
    render() {
        if(this.props.movies.length>0){
            return (
                <div className="row">
                    {
                        this.props.keyWord && !this.props.isLoading && <h4 className="text-center text-primary">{this.props.keyWord.toUpperCase()}</h4>
                    }
                    {this.props.movies.map(movie=>(
                        <div key={movie.id} className="col-md-3 my-2">
                            <div className="card ">
                                <img src={movie.image} className="card-img-top img-fluid image" />
                                <div className="card-footer card-movie-footer p-1">
                                    <h6 className="text-justify">{movie.title}</h6>
                                    
                                    {
                                        movie.imDbRating && 
                                        <div>
                                        <hr /> 
                                        <h6><span className="text-dark" >Raiting:</span>  {movie.imDbRating}</h6>
                                        </div>
                                    }
                                    {
                                        movie.directors && 
                                        <div>
                                        <hr /> 
                                        <h6><span className="text-dark" >Directors:</span> {movie.directors}</h6>
                                        </div>
                                    }
                                    {
                                        movie.runtimeMins && 
                                        <div>
                                        <hr /> 
                                        <h6><span className="text-dark" >Run Time Mins:</span> {movie.runtimeMins}</h6>
                                        </div>
                                    }
                                    {
                                        movie.imDbRatingCount && 
                                        <div>
                                        <hr /> 
                                        <h6> <span className="text-dark" >ImDb Rating Count:</span>  {movie.imDbRatingCount}</h6>
                                        </div>
                                    }
                                    {
                                        movie.year && 
                                        <div>
                                        <hr /> 
                                        <h6> <span className="text-dark" >Year:</span>  {movie.year}</h6>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            )
        }else{
            return(
                <></>
            )
            
        }
        
           
        
        
    }
}

export default movieView
