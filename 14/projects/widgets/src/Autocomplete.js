import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    };
  }
  handleInput = e => {
    console.log(e.target.value);
    this.setState({ inputVal: e.target.value });
  };

  updateSearchString = e => {
    this.setState({ inputVal: e.target.innerText });
  };

  render() {
    const names = this.props.names.map(name => <li key={name}>{name}</li>);
    console.log(names);
    return (
      <div>
        <h1>Autocomplete</h1>
        <div className='listDiv'>
          <input
            type='text'
            placeholder='Search...'
            value={this.state.inputVal}
            onChange={this.handleInput}></input>
          <ul onClick={this.updateSearchString}>{names}</ul>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
