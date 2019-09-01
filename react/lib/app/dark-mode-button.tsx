import React, { Component } from "react";
import Button from "./button";

interface DarkModeButtonState {
    active: boolean;
}

export default class DarkModeButton extends Component<{}, DarkModeButtonState> {
    state: DarkModeButtonState = {
        active: false
    };
    toggle = () => {
        const active = !this.state.active;
        this.setState({ active });
        if (active) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    };
    render() {
        return (
            <Button
                className="rive-dark-mode-button"
                active={this.state.active}
                onClick={this.toggle}
            >
                Dark Mode
            </Button>
        );
    }
}
