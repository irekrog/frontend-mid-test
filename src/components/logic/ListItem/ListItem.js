import React from 'react';
import './list-item.scss';

const ListItem = ({data, handleDelete}) => {
    const houses = data.map(({address, owner, price, area, _id}) => {
        return (
            <li key={_id}>
                <p>Address: {address}</p>
                <p>Owner: {owner}</p>
                <p>Price: {price}</p>
                <p>Area: {area}</p>
                <button className="delete-button" onClick={() => handleDelete(_id)}>Delete</button>
            </li>
        )
    })
    return (
        <div style={{paddingTop: 20}}>
            <p>Lista</p>
            <ul>
                {houses}
            </ul>
        </div>
        
    )
}

export default ListItem;