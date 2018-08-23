import React, { Component } from 'react';
import ListItem from '../../components/logic/ListItem/ListItem';
import AddItem from '../../components/logic/AddItem/AddItem';
import { getHouses } from './actions';
import { connect } from 'react-redux';

export class LogicContainer extends Component {

    state = {
        address: '',
        price: 0,
        area: '',
        owner: ''
    }

    getData = () => {
        fetch('http://mr-test-backend.sadek.usermd.net/houses', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.props.getHouses(json.houses);
        });
    }

    sendData = (event) =>  {
        event.preventDefault();
        fetch('http://mr-test-backend.sadek.usermd.net/houses', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                "address": this.state.address,
                "owner": this.state.owner,
                "price": this.state.price,
                "area": this.state.area
              })
        })
        .then(() => {
            this.getData();
        })
        .catch(error => console.error(error));
    }

    handleDelete = (id) => {
        fetch(`http://mr-test-backend.sadek.usermd.net/houses/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            this.getData();
        })
        .catch(error => console.error(error))
    }

    componentDidMount() {
        this.getData();
    }

    handleMultiple = (event) => {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <AddItem handleMultiple={this.handleMultiple} sendData={this.sendData} />
                <ListItem data={this.props.houses} handleDelete={this.handleDelete} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        houses: state.houseReducer
    }
}

const mapDispatchToProps = {
    getHouses
}

export const Logic = connect(mapStateToProps, mapDispatchToProps)(LogicContainer);