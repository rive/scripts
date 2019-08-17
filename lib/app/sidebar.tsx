import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { config, pages } from "../";
import Search from "./search";
import "./sidebar.css";

export interface SidebarState {
    searchValue: string;
}

class Sidebar extends Component<{}, SidebarState> {
    state: SidebarState = { searchValue: "" };

    handleSearchChange = (searchValue: string) => {
        this.setState({ searchValue });
    };

    render() {
        const configData = config();
        const pagesData = this.state.searchValue
            ? pages().filter(
                  p =>
                      p.title &&
                      p.title
                          .toLocaleLowerCase()
                          .includes(this.state.searchValue.toLocaleLowerCase())
              )
            : pages();
        return (
            <aside className="rive-sidebar">
                <p>
                    <strong>{configData.name}</strong>
                </p>
                <p>{configData.description}</p>
                <Search
                    value={this.state.searchValue}
                    onChange={this.handleSearchChange}
                />
                <ul>
                    {pagesData.map(p => (
                        <li key={p.path}>
                            <NavLink exact={true} to={p.path}>
                                {p.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <p>{configData.copyright}</p>
            </aside>
        );
    }
}

export default Sidebar;
