import React from 'react';
import {Link} from 'react-router-dom';

export default function House(props) {
        const {houseList} = props;
        return (
            <div>
                <div>{houseList.id}</div>
                <div>{houseList.name}</div>
                <div>{houseList.address}</div>
                <div>{houseList.city}</div>
                <div>{houseList.state}</div>
                <div>{houseList.zipcode}</div>
                <img src={houseList.image} alt={houseList.image}/>
                <div>{houseList.mortgate}</div>
                <div>{houseList.rent}</div>
                <Link to={`/house/${houseList.id}`}><button>View Details</button></Link>
            </div>
        )
}