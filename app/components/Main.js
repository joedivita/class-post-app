import * as React from 'react';
import { Header } from './Header';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { Main };


