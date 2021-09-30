import React, { Component } from 'react'


class Details extends Component {
    
    render() {
        const {type,year,fullTitle,imDb} = this.props.details
        return (
            
                    <div className="details-card">
                        <div className="card px-0">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={this.props.image} className="img-top img-fluid" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6>Title: <span className="text-primary">{fullTitle}</span></h6>
                                        <hr />
                                        <h6>Type: <span className="text-primary">{type}</span></h6>
                                        <hr />
                                        <h6>Year: <span className="text-primary">{year}</span></h6>
                                        <hr />
                                        <h6>İmdb: <span className="text-primary">{imDb}</span></h6>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            
        ) 
    }
}

export default Details
