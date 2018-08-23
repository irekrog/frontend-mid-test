import React from 'react';
import './input.scss';

const AddItem = ({sendData, handleMultiple}) => {
    return (
        <form onSubmit={sendData} style={{paddingTop: 20}}>
            <label htmlFor="address">Address</label>
            <input id="address" type="text" name="address" placeholder="Adsress" onChange={handleMultiple}  required={true}/>
            <label htmlFor="owner">Owner</label>
            <input id="owner" type="text" name="owner" placeholder="Owner" onChange={handleMultiple} required={true} />
            <label htmlFor="price">Price</label>
            <input id="price" type="text" name="price" placeholder="price" onChange={handleMultiple} required={true} />
            <label htmlFor="area">Area</label>
            <input id="area" type="number" name="area" placeholder="Area" onChange={handleMultiple} required={true} />
            <button >Send new data</button>
        </form>
    )
}

export default AddItem;