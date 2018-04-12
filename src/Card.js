import React from "react";

import "./Card.css";

class Button extends React.Component {
  render() {
    const { children, className = "", ...rest } = this.props;
    const classes = ["Card", className].join(" ").trim();

    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}

export default Button;
