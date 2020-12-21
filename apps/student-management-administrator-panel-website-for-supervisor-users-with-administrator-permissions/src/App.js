import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from "./home/Home";
import './App.css';

// Due to the simplicity of the app, I've opted for a single-page design. No need for multiple routes
function App()
{
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
