import React, { Component, Fragment } from "react";
import { Page } from "../pages";
import MenuItem from "./menu-item";

export interface MenuProps {
    className?: string;
    pages: Page[];
    level?: number;
}

interface Toggles {
    [key: string]: boolean;
}

export interface MenuState {
    toggles: Toggles;
}

export default class Menu extends Component<MenuProps> {
    state: MenuState = {
        toggles: {}
    };

    componentDidMount() {
        this.props.pages.forEach(page => {
            if (location.pathname.indexOf(page.path) > -1) {
                this.open(page.path);
            }
        });
    }

    isOpen = (path: string) => this.state.toggles[path];

    open = (path: string) => {
        const toggles = this.state.toggles;
        toggles[path] = true;
        this.setState({ toggles });
    };

    toggle = (path: string) => {
        const toggles = this.state.toggles;
        toggles[path] = !toggles[path];
        this.setState({ toggles });
    };

    render() {
        const { className, pages } = this.props;
        const level = this.props.level || 0;

        return (
            <div className={["rive-menu", className].join(" ")}>
                {pages.map(p => (
                    <Fragment key={p.path}>
                        <MenuItem
                            page={p}
                            level={level}
                            isOpen={this.isOpen(p.path)}
                            toggle={this.toggle}
                        />
                        {p.children && this.isOpen(p.path) && (
                            <Menu pages={p.children} level={level + 1} />
                        )}
                    </Fragment>
                ))}
            </div>
        );
    }
}
