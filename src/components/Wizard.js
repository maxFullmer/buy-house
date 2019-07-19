import React, {Component} from 'react';

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: 12345
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.placeholder]: event.target.value
        })
    }
    
    render() {
        console.log(this.state)
        return (
        <div>
            <input type="text" placeholder="name"  onChange={this.handleChange}/>
            <input type="text" placeholder="address"  onChange={this.handleChange}/>
            <input type="text" placeholder="city"  onChange={this.handleChange}/>
            <input type="text" placeholder="state"  onChange={this.handleChange}/>
            <input type="text" placeholder="zipcode"  onChange={this.handleChange}/>
        </div>
    )
    }
    
}