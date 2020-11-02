import React from 'react';

export class Menu extends React.Component{


    render(){
      return ( <div>
            <a href={'./App.js'}>Home</a>
            <a href={'#'}>Create</a>
            <a href={'#'}>Login</a>
        </div>
      )
    }
}