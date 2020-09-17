import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  tick = () => {
    this.setState({ time: new Date() });
  };

  componentDidMount = () => {
    this.interval = setInterval(this.tick, 1000);
  };

  componentWillUnmount = () => {
    this.interval = clearInterval(this.interval);
  };

  render() {
    return (
      <>
        <h1 className='clock'>Clock</h1>
        <div className='clockDiv'>
          <div className='timeDiv'>
            <div>Time:</div>
            <div>
              {this.state.time.getHours()}:{this.state.time.getMinutes()}:
              {this.state.time.getSeconds()}
            </div>
          </div>
          <div className='dateDiv'>
            <div>Date:</div>
            <div>
              {this.state.time.getMonth() + 1} {this.state.time.getDate()}{' '}
              {this.state.time.getFullYear()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
