import React, { Component } from 'react';
import NavigationRouter from './NavigationRouter';

//Auth and Context Managment
class App extends Component {
    render() {
        return (
            <div>
                <NavigationRouter />
            </div>
        );
    }
}

export default App;