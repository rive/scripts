import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
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
