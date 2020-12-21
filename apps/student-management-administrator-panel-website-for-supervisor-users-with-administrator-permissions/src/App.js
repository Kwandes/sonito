import Home from "./home/Home";
import {BrowserRouter} from 'react-router-dom';

import './App.css';

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
