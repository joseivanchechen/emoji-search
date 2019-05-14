import React, { PureComponent } from "react";
import "./Header.css";

class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <span role="img" aria-label="sunglasses">😎</span>
        Emoji Search
        <span role="img" aria-label="sunglasses">😎</span>
      </header>
    );
  }
}
export default Header;
