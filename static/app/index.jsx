import React from 'react';
import {render} from 'react-dom';

import CalendarComponent from './CalendarComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Getting started now.</p>
        <CalendarComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
