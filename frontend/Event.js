import React from 'react';

const Event = ({ imgSrc, title }) => {
  return (
    <div className="event">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

const EventList = () => {
  return (
    <div className="event-list">
      <div className="advertisement">
        <h2>Upcoming Events</h2>
        <p>Check out our exciting lineup of events!</p>
      </div>
      <div className="row">
        <Event imgSrc="https://via.placeholder.com/150" title="Event 1" />
        <Event imgSrc="https://via.placeholder.com/150" title="Event 2" />
        <Event imgSrc="https://via.placeholder.com/150" title="Event 3" />
      </div>
      <div className="advertisement">
        <h2>Don't Miss Out!</h2>
        <p>Join us for these incredible events!</p>
      </div>
      <div className="row">
        <Event imgSrc="https://via.placeholder.com/150" title="Event 4" />
        <Event imgSrc="https://via.placeholder.com/150" title="Event 5" />
        <Event imgSrc="https://via.placeholder.com/150" title="Event 6" />
      </div>
    </div>
  );
};

export default EventList;
