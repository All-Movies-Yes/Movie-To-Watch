import React, { Component } from 'react'
import axios from 'axios';
import Footer from './Footer.jsx'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            moviename: "",
            category: "",
            description: "",
            imageurl: "",

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    // A helper function to make api calls easier 
    /**
     * 
     * @param {*} path // /movie/add ...
     * @param {*} method // post , get , put , delete 
     * @param {*} body  // req.body on the server
     */
    api(path, method = 'GET', body = null,) {
        const url = "http://localhost:3000" + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        };
        if (body !== null) {
            options.body = JSON.stringify(body);
        }
        return fetch(url, options);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => {
            return {
                [name]: value
            };
        });
    }
    async handleSubmit(e) {
        e.preventDefault();
        console.log("will be added")
        const movie = {
            moviename: this.state.moviename,
            category: this.state.category,
            description: this.state.description,
            imageurl: this.state.imageurl
        }
        /**
         * calling the api function with 3 parameters 
         * the path we specified /movie/addMovie
         * the method POST
         * and the req.body that is movie {}
         */
        const res = await this.api('/movie/addMovie', 'POST', movie)
        //if the status is 200 OK else throw an error 
        if (res.status === 200) {
            // location.reload()
            this.setState()
        }
        else {
            throw new Error("error Creating movie")
        }
    }
    async handleDelete(moviename) {
        console.log("will be deleted")
        console.log(moviename)
        // khdhyt data li fl state hatithom fi array movies w bel filter na9es l objet li esmah nafs l esm mta3 li nzelna aaleha bsh nfasskhouha
        // baaed badel state bl array jdid .
        let movies = this.state.data.filter(movie => movie.moviename != moviename)
        console.log(movies)
        this.setState({ data: movies })
        const movie = {
            moviename
        }
        const res = await this.api('/movie/del', 'DELETE', movie)
        if (res.status === 200 || res.status === 204) {
            return [];
        }
        else {
            throw new Error("error on delete")

        }
    }
    componentDidMount() {
        // calling the api and getting the data then pushing them to the state when the component mounts
        axios.get("http://localhost:3000/movie")
            .then(response => {
                this.setState({ data: response.data })
            })

    }

    render() {
        return (
            <div className="back">
                <div id="logoLeft">M T W</div>
                <h1 id="title"> Movies To Watch </h1>

                <div className="register">
                    <h2 id="titleReg">Add Your Favorit Movie</h2>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input type="text" id="name" name="moviename" autoComplete="off" placeholder="name" onChange={this.handleChange} /><br />

                        <input type="text" id="category" name="category" autoComplete="off" placeholder="category" onChange={this.handleChange} /><br />

                        <input type="text" id="description" name="description" autoComplete="off" placeholder="description" onChange={this.handleChange} /><br />

                        <input type="text" id="image" name="imageurl" autoComplete="off" placeholder="image url" onChange={this.handleChange} /><br />

                        <input className="btn" type="submit" value="Add movie" className="submitBtn" />
                    </form>

                    <div className="container">
                        <div className="row">
                            {
                                this.state.data.map((movie, index) => {
                                    return (
                                        <div>
                                            <div className="movie" key={movie._id} style={{ backgroundImage: `url:(${movie.imageurl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                                                <h2 className="moviename">{movie.moviename}</h2>
                                                <div className="category"> {movie.category}</div>
                                                <img className="movie-image" src={movie.imageurl} alt="image url " />

                                                <p>{movie.description}</p>
                                                <h4 className="releasedate">  {movie.releasedate} <hr></hr> </h4>
                                                <button className="btn" onClick={() => this.handleDelete(movie.moviename)} style={{ border: "1px solid white", padding: "10px", backgroundColor: "transparent" }}>
                                                    Delete
                                            </button>

                                            </div>
                                            <br></br>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}




