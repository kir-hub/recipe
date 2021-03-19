import React, { Component } from "react";
import Item from "./Item";
import List from './List'
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <List/>
            </div>
        );
    }
}

export default App;