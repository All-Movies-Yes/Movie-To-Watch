import React, { Component } from 'react'
import OneMovie from './oneMovie.jsx'
import $ from 'jquery';
import Footer from './Footer.jsx'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            items: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickOff = this.handleClickOff.bind(this)
    }
    handleClick() {
        this.setState({ show: true })
    }
    handleClickOff() {
        this.setState({ show: false })
    }




    render() {
        if (this.state.items.length === 0) {
            let that = this
            $.get('/movie/', function (data) {
                that.setState({ items: data })
                console.log(data)
            })
        }
        return (
            <div className="back">
                <div id="logoLeft">M-T-W</div>
                <div className="register">

                    <h1> Movies To Watch </h1><br></br>
                    <br></br>
                    {this.state.items.map(data => { return (<OneMovie key={data.moviename} data={data} />) })}

                </div>
                <Footer />
            </div>
        )
    }
}

{/* <h2>Ready to watch? Enter your email to create or restart your membership.</h2> */ }
// <input className="email" type="email" name="email" placeholder="example@gmail.com" /><br></br>
// {this.state.show ? <input className="email" type="password" name="password" placeholder="*******" /> : <div></div>}<br></br>
{/* <button onClick={this.handleClick} className="btn">Next</button> */ }
// <button onClick={this.handleClickOff} className="btn">Register</button>


