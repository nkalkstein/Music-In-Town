import React, { Component } from 'react';
import './App.css';

class EventCard extends Component {
  render() {
    let {datetime, lineup} = this.props.event
    return (
      <div>
        <div className="events">
          <h3> {this.props.event.venue.name}</h3>
          <p> {this.props.event.venue.city}, {this.props.event.venue.region}, {this.props.event.venue.country}</p>
          <p> When: {datetime.slice(0, 10)} </p>
          <p> Who: {lineup}</p>
        </div>
        <div>
          <button>Add to My Shows</button>
        </div>
        <hr></hr>
    </div>
    );
  }
}

export default EventCard;
