import React from "react";

class Button extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    return <button {...rest}>{children}</button>;
  }
}

export default Button;
