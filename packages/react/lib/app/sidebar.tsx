import config from "@rive//shared/lib/config";
import { searchPages } from "@rive/shared/lib/pages";
import React, { Component, ComponentType } from "react";
import Menu from "./menu";
import Search from "./search";

export interface SidebarState {
    query: string;
}

class Sidebar extends Component<{}, SidebarState> {
    state: SidebarState = { query: "" };

    handleSearchChange = (query: string) => {
        this.setState({ query });
    };

    render() {
        const configData = config();

        const pages = searchPages<ComponentType>(this.state.query);

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
                <Menu className="rive-sidebar__menu" pages={pages} />
                <footer className="rive-sidebar__footer">
                    <p>&copy; {configData.copyright}</p>
                </footer>
            </aside>
        );
    }
}

export default Sidebar;
