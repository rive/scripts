import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import config from "../config";
import { Page, searchPages } from "../pages";
import Search from "./search";
import "./sidebar.css";

export interface SidebarState {
    query: string;
}

class Sidebar extends Component<{}, SidebarState> {
    state: SidebarState = { query: "" };

    handleSearchChange = (query: string) => {
        this.setState({ query });
    };

    renderMenu(pages: Page[]) {
        return (
            <ul>
                {pages.map(p => (
                    <li key={p.path}>
                        <NavLink exact={true} to={p.path}>
                            {p.title}
                        </NavLink>
                        {p.children && this.renderMenu(p.children)}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const configData = config();

        const pages = searchPages(this.state.query);

        return (
            <aside className="rive-sidebar">
                <header className="rive-sidebar__header">
                    <p>
                        <strong className="rive-sidebar__name">
                            {configData.name}
                        </strong>
                        <span className="rive-sidebar__version">
                            {configData.version}
                        </span>
                    </p>
                    <p>{configData.description}</p>
                </header>
                <Search
                    className="rive-sidebar__search"
                    value={this.state.query}
                    onChange={this.handleSearchChange}
                />
                <div className="rive-sidebar__menu">
                    {this.renderMenu(pages)}
                </div>
                <footer className="rive-sidebar__footer">
                    <p>&copy; {configData.copyright}</p>
                </footer>
            </aside>
        );
    }
}

export default Sidebar;
