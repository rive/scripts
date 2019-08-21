import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Page } from "../pages";
import "./menu-item.css";

export interface MenuItemProps {
    page: Page;
    level: number;
    isOpen: boolean;
    toggle: (path: string) => void;
}

export default class MenuItem extends Component<MenuItemProps> {
    handleClick = () => {
        this.props.toggle(this.props.page.path);
    };

    render() {
        const { page, level, isOpen } = this.props;
        let toggleClassName;
        if (page.children && page.children.length > 0) {
            toggleClassName = isOpen
                ? "rive-menu__toggle--open"
                : "rive-menu__toggle--close";
        } else {
            toggleClassName = "rive-menu__toggle--none";
        }
        return (
            <NavLink
                exact={true}
                to={page.path}
                className={[
                    "rive-menu__item",
                    isOpen ? "rive-menu__item--open" : ""
                ].join(" ")}
                style={{
                    paddingLeft: `calc(${level} * var(--rive-menu-indention) + var(--rive-menu-padding-x))`
                }}
                onClick={this.handleClick}
            >
                <span
                    className={["rive-menu__toggle", toggleClassName].join(" ")}
                />
                <span>{page.title}</span>
            </NavLink>
        );
    }
}
