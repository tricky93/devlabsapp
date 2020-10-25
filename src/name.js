import React from 'react';
import axios from 'axios';

export class Name extends React.Component {
    state = {
        name: '',
        isLoading: false
    }

    async componentDidMount(){
        this.setState({isLoading: true})
        try {
            const response = await axios.get('/random');
            
            this.setState({ name: response.data.username, isLoading: false})
        } catch (error) {
            return
        }
    }

    componentWillUnmount(){
        this.setState = (state, callback) => {
            return;
        };
    }

    render(){
        const {name, isLoading} = this.state;

        if(isLoading) return <div><h1>Loading...</h1></div>

        return (<div>
            <h1>{name}</h1>
        </div>)
    }
}