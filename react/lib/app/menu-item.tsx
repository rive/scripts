import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Page } from "../pages";

export interface MenuItemProps {
    page: Page;
    level: number;
    isOpen: boolean;
    toggle: (path: string) => void;
}

export default class MenuItem extends Component<MenuItemProps> {
    static defaultProps = {
        level: 0
    };

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
                    "rive-menu__item--level-" + level,
                    isOpen ? "rive-menu__item--open" : ""
                ].join(" ")}
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
