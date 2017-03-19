import * as React from 'react';
import { Header } from './Header';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

class Main extends React.Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <div>
          <Header />
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </LocaleProvider>
    );
  }
}

export { Main };


