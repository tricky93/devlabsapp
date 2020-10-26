import React from 'react';

export class Alert extends React.Component{

    render(){
        const errorMessage = this.props.errorMessage ? this.props.errorMessage : "Technical error"
        return <div>
            <h4>{errorMessage}</h4>
        </div>
    }

}