import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

class Search extends Component {
    constructor(props){
        super()
        this.state={
            movieName:""
        }
    }
    onChange=(e)=>{
        this.setState({movieName:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.movieName===""){
            alert("Please Enter A Movie Name")
        }
        this.props.searchMovie(this.state.movieName)
        this.setState({movieName:""})
        this.props.history.push("/")   
    }
    render() {
        return (
                <form onSubmit={this.onSubmit} className="input-group" >
                    <input onChange={this.onChange} className="form-control" />
                    <button className="btn btn-primary form-control-append" >Search</button>
                </form>
            
        )
    }
}

export default withRouter(Search)
