import React from 'react';
import axios from 'axios';
import {Alert} from './alert';

export class Name extends React.Component {
    state = {
        name: '',
        isLoading: false, 
        hasError: false
    }

    async componentDidMount(){
        this.setState({isLoading: true})
        try {
            const response = await axios.get('/random');
            
            this.setState({ name: response.data.username, isLoading: false})
        } catch (error) {
            this.setState({ isLoading: false, hasError: true})
        }
    }

    componentWillUnmount(){
        this.setState = (state, callback) => {
            return;
        };
    }

    render(){
        const {name, isLoading, hasError} = this.state;

        if(isLoading) return <div><h1>Loading...</h1></div>

        if(hasError) return <Alert/>

        return (<div>
            <h1>{name}</h1>
        </div>)
    }
}