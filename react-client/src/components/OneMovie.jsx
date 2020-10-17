import React from 'react'

class OneMovie extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {console.log(this.props.data)}
                <div className="movie">
                    <h2 className="moviename">{this.props.data.moviename}</h2>
                    <div className="category"> {this.props.data.category}</div>
                    <img src={this.props.data.imageurl} className="movie-image" />
                    <p>{this.props.data.description}</p>
                    <h4 className="releasedate">{this.props.data.releasedate} </h4>
                    <button onClick={this.handleClick} className="btn">Add To My List</button>
                    <hr></hr>
                </div>

            </div>
        )
    }
}
export default OneMovie
