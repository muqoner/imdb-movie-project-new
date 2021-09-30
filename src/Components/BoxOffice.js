import React, { Component } from 'react'
import axios from 'axios'

export class BoxOffice extends Component {
    constructor(props){
        super()
        this.state={
            boxOffice:[]
        }
    }
    componentDidMount(){
        axios.get(`https://imdb-api.com/en/API/BoxOfficeAllTime/${this.props.apiKey}`)
            .then(res=>{
                this.setState({boxOffice:res.data.items})
            })
    }
    render() {
        return (
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>World Wide Life Time Gross</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.boxOffice.map(movie=>(
                            <tr key={movie.id}>
                                <td className="w-50"><h6>{movie.title}</h6></td>
                                <td className="w-20"><h6>{movie.year}</h6></td>
                                <td className="w-30"><h6>{movie.worldwideLifetimeGross}</h6></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BoxOffice
