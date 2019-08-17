import React, { ChangeEvent, Component, FormEvent } from "react";
import "./search.css";

export interface SearchProps {
    value: string;
    onChange: (value: string) => void;
}

class Search extends Component<SearchProps> {
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.value);
    };

    handleReset = () => {
        this.props.onChange("");
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    render() {
        const { value } = this.props;
        return (
            <form
                className="rive-search"
                onSubmit={this.handleSubmit}
                onReset={this.handleReset}
            >
                <input
                    className="rive-search__input"
                    type="search"
                    value={value}
                    onChange={this.handleChange}
                    placeholder="Search..."
                />
                <button
                    type="reset"
                    className={`rive-search__clear ${
                        value ? "" : "rive-search__clear--hidden"
                    }`}
                >
                    &times;
                </button>
            </form>
        );
    }
}

export default Search;
