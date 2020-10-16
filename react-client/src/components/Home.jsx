import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
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
        return (
            <div className="back">
                <div id="logoLeft">M-T-W</div>
                <div className="register">

                    <h1> Movies To Watch </h1>
                    <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                    <input className="email" type="email" name="email" placeholder="example@gmail.com" /><br></br>
                    {this.state.show ? <input className="email" type="password" name="password" placeholder="*******" /> : <div></div>}<br></br>
                    <button onClick={this.handleClick} className="btn">Next</button>
                    <button onClick={this.handleClickOff} className="btn">Register</button>

                </div>
            </div>
        )
    }
}


