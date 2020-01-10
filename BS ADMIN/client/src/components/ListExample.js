import React from 'react';
import axios from 'axios'
import './admin.css'

class ListeExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            email: '',
            rôle: '',
        };


    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const id = this.props.el._id


        const name = this.state.name === '' ? this.props.el.name : this.state.name
        const email = this.state.email === '' ? this.props.el.tel : this.state.email
        const rôle = this.state.rôle === '' ? this.props.el.rôle : this.state.rôle
       
        const obj = {
            name, email, rôle
        }
        axios.put(`/api/Client/${id}`, obj)
            .catch(err => this.toggle())
        this.setState({
            modal: false
        })
        this.toggle();



    }

    
}

export default ListeExample;