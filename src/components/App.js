import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FormAdd from './FormAdd';
import FormDisplay from './FormDisplay';
import EditData from './EditData';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={FormDisplay} />
                    <Route path="/Add" exact component={FormAdd} />
                    <Route path="/Edit" exact component={EditData} />

                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;

