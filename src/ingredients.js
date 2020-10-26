import React from 'react';

export class Ingredients extends React.Component{
    render(){

        if(!this.props.ingredientsList) return <div>Oops no ingredients</div>

        return(
            <div>
                <ul>
                   {this.props.ingredientsList.map((element, i) => (<li key={i}>{element}</li>))}
                </ul>
            </div>
        )
    }
}