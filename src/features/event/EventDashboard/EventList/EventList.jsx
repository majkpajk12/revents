import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";
//import { Icon } from "semantic-ui-react";

class EventList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.events.map(event => (
          <EventListItem key={event.id} event={event} />
        ))}
      </Fragment>
    );
  }
}

export default EventList;
