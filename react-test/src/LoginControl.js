import React from "react";

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Welcome(props) {
  if (!props.isLoggedIn) {
    return null;
  }
  
  return (
    <h4>Welcome user!</h4>
  )
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h2>Messages?</h2>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
      <h3>You {unreadMessages.length ? "have" : "don't have"} mail</h3>
    </div>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    // const messages = [];
    
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <h1>LoginControl</h1>
        <NumberList numbers={[10,20]} />
        <Welcome isLoggedIn={isLoggedIn} />
        <Mailbox unreadMessages={messages} />
        <ul>{listItems}</ul>
        {button}
      </div>
    );
  }
}

export default LoginControl;