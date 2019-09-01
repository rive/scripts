import { getPagesFlat } from "@rive/shared/lib/pages";
import React, { ComponentType, FC } from "react";
import { Route } from "react-router-dom";

const Content: FC = () => (
    <main className="rive-content">
        {getPagesFlat<ComponentType>().map(p => (
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
