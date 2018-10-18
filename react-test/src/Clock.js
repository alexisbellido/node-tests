import React, { Component} from "react";

// 1
// ReactDOM.render(element, document.getElementById('root'));

// 2
// function Clock(props) {
//   let date;
//   if (props.date) {
//     date = props.date.toLocaleTimeString();
//   } else {
//     date = 'There is no date';
//   }
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>It is {date}.</h2>
//     </div>
//   )
// }
// 
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
// 
// setInterval(tick, 1000);

// 3

function ActionLink(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('link clicked');
  }
  
  return (
    <p><a href="#" onClick={handleClick}>a link</a></p>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      letters: ''
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(letters, e) {
    e.preventDefault();
    console.log('toggle clicked');
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      letters: letters
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this,'xyz')}>
        {this.state.isToggleOn ? 'ON' : 'OFF'} - letters: {this.state.letters}
      </button>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }
  
  render() {
    return (
      <div>
        <h4>Number passed to Welcome component via props: {this.props.number} and color from state: {this.state.color}</h4>
        <ActionLink />
        <Toggle />
      </div>
    )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
    }
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState((state, props) => ({
        date: new Date(),
        count: state.count + 1
    }));
  }
  
  render() {
    return (
      <div>
        <h1>Clock component here</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>Count is {this.state.count}</h3>
        <Welcome number={this.state.count} />
      </div>
    )
  }
}

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

export default Clock;