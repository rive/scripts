import React, { Component } from "react";
import Button from "./button";

interface ColorBlindModeButtonState {
    active: boolean;
}

export default class ColorBlindModeButton extends Component<
    {},
    ColorBlindModeButtonState
> {
    state: ColorBlindModeButtonState = {
        active: false
    };
    toggle = () => {
        const active = !this.state.active;
        this.setState({ active });
        if (active) {
            document.body.classList.add("rive-color-blind-mode");
        } else {
            document.body.classList.remove("rive-color-blind-mode");
        }
    };
    render() {
        return (
            <Button
                className="rive-color-blind-mode-button"
                active={this.state.active}
                onClick={this.toggle}
            >
                Color Blind Mode
            </Button>
        );
    }
}
