import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DetailedHouse extends React.Component {
    constructor() {
        super();
        this.state = {
            house: []
        }
        this.getHouse = this.getHouse.bind(this)
    }

    componentDidMount(){
        this.getHouse()
    }

    getHouse() {
        axios.get(`/api/house/${this.props.match.params.id}`).then(response => {
            this.setState({
                house: response.data
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.house.map(detailedHouse => {
                        return (
                            <div>
                                <div>{detailedHouse.id}</div>
                                <div>{detailedHouse.name}</div>
                                <div>{detailedHouse.address}</div>
                                <div>{detailedHouse.city}</div>
                                <div>{detailedHouse.state}</div>
                                <div>{detailedHouse.zipcode}</div>
                                <img src={detailedHouse.image} alt={detailedHouse.image}/>
                                <div>{detailedHouse.mortgate}</div>
                                <div>{detailedHouse.rent}</div>
                                <Link to="/">Back to Dashboard</Link>
                            </div>
                        )
                    })
                }
            </div>
    )
    }
}