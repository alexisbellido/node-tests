import React from 'react';

// stateless functional component
const Header = (props) => {
    return (
      <header className="top">
      <h1>Favorite color is { props.color }</h1>
      <div className="bg1">Backgound 1</div>
      <div className="bg2">Backgound 1</div>
      </header>
    );
};

export default Header;
