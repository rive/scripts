import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./content";
import Sidebar from "./sidebar";

const App: FC = () => (
    <Router>
        <div className="rive-app">
            <Sidebar />
            <Content />
        </div>
    </Router>
);

export default App;
