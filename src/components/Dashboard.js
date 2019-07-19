import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axois from 'axios';
import House from './House.js'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houseList: []
        }
        
        this.gethouseList = this.gethouseList.bind(this);
    }

    componentDidMount() {
        this.gethouseList()
    }

    gethouseList() {
        axois.get('/api/houseList')
        .then(response => {
            this.setState({
                houseList: response.data
            })
        })
        console.log(this.state)
    }

    //deletehouse = (event) => {} 
    render() {
        let mappedhouseList = this.state.houseList.map((house, index) => {
            return (
                <div key={index}>
                    <House houseList={this.state.houseList[index]} />
                    {/* <House houseList={this.state.houseList[index]} deletehouse={this.deletehouse}/> */}
                </div>
            )
        })
        return (
        <div>
            {mappedhouseList}
            <Link to="/wizard" ><button>Add New Property</button></Link>
        </div>
    )
    }
    
}