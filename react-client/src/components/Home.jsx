import React, { Component } from 'react'
import axios from 'axios';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            moviename:"",
            category:"",
            description:"",
            imageurl:"",
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        }
    api(path, method = 'GET', body = null,) {
        const url ="http://localhost:3000" + path;
      
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
  
    handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(()=>{
            return {
                [name]:value
            };
        });
    }
   async handleSubmit(e) {
        e.preventDefault();
        console.log("will be added")
        const movie ={
           moviename:this.state.moviename,
           category:this.state.category,
           description:this.state.description,
           imageurl:this.state.imageurl
        }
       const res =  await this.api('/movie/addMovie','POST',movie)
       if(res.status===200){
           return[];
       }
       else{
           throw new Error("error Creating movie")
       }
    }
    async handleDelete(moviename){
        console.log("will be deleted")
        console.log(moviename)
        const movie = {
            moviename
        }
        const res =  await this.api('/movie/del','DELETE',movie)
        if(res.status===200 || res.status===204){
            return[];
        }
        else{
            throw new Error("error on delete")

        }
    }
   componentDidMount(){
    axios.get("http://localhost:3000/movie")
    .then(response=>{
        this.setState({data:response.data})
    })
  
   }

    render() {
        return (
            <div className="back">
                <div id="logoLeft">M-T-W</div>
                <div className="register">
                <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="moviename" onChange={this.handleChange} /><br/>
            <label htmlFor="category">category</label>
            <input type="text" id="category" name="category" onChange={this.handleChange} /><br/>
            <label htmlFor="description">description</label>
            <input type="text" id="description" name="description" onChange={this.handleChange}/><br/>
            <label htmlFor="description">image url</label>
            <input type="text" id="image" name="imageurl" onChange={this.handleChange} /><br />
            <input type="submit" value="add movie" />
            </form>
                    <h1> Movies To Watch </h1>
                        <div className="container">
                            <div className="row">
                            {
                            this.state.data.map((movie,index)=>{
                                return (

                                    <div className="col-sm-4" key={movie._id} style={{backgroundImage:`url:(${movie.imageurl})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                                    <h1>{movie.moviename}</h1>
                                    <span onClick={()=>this.handleDelete(movie.moviename)} style={{border:"1px solid white",padding:"10px",backgroundColor:"transparent"}}> 
                                        Delete
                                    </span>
                                    <p>
                                        {movie.description}
                                        {movie.releasedate
}
                                    </p>
                                    <img src={movie.imageurl} alt="image url " width="250" height="200"/>
                                </div>
                                )
                            })
                            }   
                            </div>
                        </div>
                 
                </div>
            </div>
        )
    }
}




