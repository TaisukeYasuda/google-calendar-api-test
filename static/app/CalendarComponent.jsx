import React from 'react';

class CalendarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    $.get('/gp', (data, status) => {
      this.setState({
        events: data
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.events.map( (event, index) => {
              return <li key={index}>{event.summary}</li>;
            })
          }
        </ul>
      </div>
    );
  }

}

export default CalendarComponent;
