import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ListGroup extends Component {    
    render() {
        return (
            <div className="col-md-3">
                <div className="list-group">
                    <Link to="#" className="list-group-item list-group-item-action disabled"><h6>Categories</h6></Link>
                    <Link to="/categories/arsenal" className="list-group-item list-group-item-action">
                        Arsenal
                    </Link>
                    <Link to="/categories/anime" className="list-group-item list-group-item-action">Anime</Link>
                    <Link to="/categories/adventures" className="list-group-item list-group-item-action">Adventures</Link>
                    <Link to="/categories/date" className="list-group-item list-group-item-action">Date</Link>
                    <Link to="/categories/dramas" className="list-group-item list-group-item-action">Dramas</Link>
                    <Link to="/categories/fantastic" className="list-group-item list-group-item-action">Fantastic</Link>
                    <Link to="/categories/ghost-story" className="list-group-item list-group-item-action">Ghost-Story</Link>
                    <Link to="/categories/romantic" className="list-group-item list-group-item-action">Romantic</Link>
                </div>
            </div>
        )
    }
}

export default ListGroup
