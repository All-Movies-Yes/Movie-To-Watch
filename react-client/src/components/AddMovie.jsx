import React,{Component} from 'react';

export default class AddMovie {
    constructor(props) {
          this.state = {
      
    }

}
    
    handleChange (e) {
        const name = e.target.name
        const value = e.target.value
        this.setState(()=>{
            return {
                [name]:value
            };
        });
    }
    render() {
    return(
        <div>
            <form>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="moviename" onChange={this.handleChange} />
            <label htmlFor="category"></label>
            <input type="text" id="category" name="category" onChange={this.handleChange} />
            <label htmlFor="description"></label>
            <input type="text" id="description" name="description" onChange={this.handleChange}/>
            </form>
        </div>
    )}
}/// lahdhaa njikee 