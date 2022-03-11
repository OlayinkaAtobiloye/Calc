import React from "react";
import "./button.css";

class Button extends React.Component {
  render() {
    return (
      <div
        className={`numButton ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
