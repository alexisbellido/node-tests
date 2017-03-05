import React from 'react';

class Clock extends React.Component {
    render () {
        return (
          <div>
            <h2>Big Clock</h2>
            <p>It is {this.props.date.toLocaleTimeString()}.</p>
          </div>
        );
    }
}

Clock.propTypes = {
    date: React.PropTypes.instanceOf(Date)
    // also works, more generic
    // date: React.PropTypes.Object
};

export default Clock;
