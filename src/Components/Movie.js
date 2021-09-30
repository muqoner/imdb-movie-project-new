import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Movie extends Component {
    constructor(props){
        super();
    }
    
    render() {
        if(this.props.movie){
            return (
                <div className="col-md-4">
                    <div className="card">
                        <img src={this.props.movie.image} className="card-img-top img-fluid"/>
                        <div className="card-footer p-0">
                            <Link to={`/details/${this.props.movie.id}`} className="btn btn-primary btn-sm w-100 m-0 " >Go Details</Link>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
        
    }
}

export default Movie;
