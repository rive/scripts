import React, { FC } from "react";

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    active?: boolean;
}

const Button: FC<ButtonProps> = ({ active, className, children, ...rest }) => {
    let computedClassName = "rive-button";
    if (active) {
        computedClassName += " active";
    }
    if (className) {
        computedClassName += " " + className;
    }
    return (
        <button className={computedClassName} type="button" {...rest}>
            {children}
        </button>
    );
};

export default Button;
