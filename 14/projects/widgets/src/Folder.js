import React from 'react';

import Headers from './Headers';

export default class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    };
  }

  selectTab = idx => {
    this.setState({ currentTab: idx });
  };

  render() {
    const folder = this.props.folders[this.state.currentTab];
    //const titles = [];
    const titles = this.props.folders.map(folder => folder.title);

    return (
      <>
        <h1 className='folder'>Folder</h1>
        <div className='tabs'>
          <div>
            <Headers
              titles={titles}
              currentTab={this.state.currentTab}
              selectTab={this.selectTab}
            />
          </div>
          <div className='tab-content'>{folder.content}</div>
        </div>
      </>
    );
  }
}
