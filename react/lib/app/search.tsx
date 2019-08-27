import React, { ChangeEvent, Component, FormEvent } from "react";

export interface SearchProps {
    className?: string;
    value: string;
    onChange: (value: string) => void;
}

class Search extends Component<SearchProps> {
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.value);
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    render() {
        const { className, value } = this.props;
        return (
            <form
                className={["rive-search", className].join(" ")}
                onSubmit={this.handleSubmit}
            >
                <input
                    className="rive-search__input"
                    type="search"
                    value={value}
                    onChange={this.handleChange}
                    placeholder="Search..."
                />
            </form>
        );
    }
}

export default Search;
