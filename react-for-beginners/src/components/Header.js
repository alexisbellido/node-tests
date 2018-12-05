import React from "react";
import PropTypes from "prop-types";

// as there won't be state this can be a stateless functional component,
// see how the stateful version, a class, would look below
// function Header(props) {
//   return (
//     <header className="top">
//       <h2>Catch of the day</h2>
//       <h3 className="tagline">
//         <span>{props.tagline}</span>
//       </h3>
//     </header>
//   );
// }

// another way with an arrow function
const Header = (props) => (
  <header className="top">
    <h2>The Catch of the day</h2>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h2>Catch of the day</h2>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;
