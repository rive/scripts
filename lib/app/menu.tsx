import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Page } from "../pages";
import MenuItem from "./menu-item";
import "./menu.css";

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

    isOpen = (path: string) => this.state.toggles[path];

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
