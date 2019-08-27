import React, { FC } from "react";
import { Route } from "react-router-dom";
import { getPagesFlat } from "../pages";

const Content: FC = () => (
    <main className="rive-content">
        {getPagesFlat().map(p => (
            <Route
                key={p.path}
                exact={true}
                path={p.path}
                component={p.component}
            />
        ))}
    </main>
);

export default Content;
