import React, { FC, Fragment } from "react";
import { Route } from "react-router-dom";
import { pages } from "..";

const Content: FC = () => {
    const pagesData = pages();
    return (
        <main className="rive-content">
            {pagesData.map(p => (
                <Route
                    key={p.path}
                    exact={true}
                    path={p.path}
                    component={p.component}
                />
            ))}
        </main>
    );
};

export default Content;
