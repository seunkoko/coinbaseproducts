import React from 'react';

// styles
import './Stats.css';

const Stats = ({
  displayName,
  open,
  high,
  low,
  volume,
  last,
  volume30day,
}) => (
  <div className="contianer stats___container">
    <div className="stats__title">
      {`${displayName} STATS`}
    </div>

    <div className="stats__row">
      <div className="row stats__details">
        <div className="col-5">
          OPEN
        </div>
        <div className="col-1">
          =
        </div>
        <div className="col-5">
          {open || 'N/A'}
        </div>
      </div>

      <div className="row stats__details">
        <div className="col-5">
          HIGH
        </div>
        <div className="col-1">
          =
        </div>
        <div className="col-5">
          {high || 'N/A'}
        </div>
      </div>

      <div className="row stats__details">
        <div className="col-5">
          LOW
        </div>
        <div className="col-1">
          =
        </div>
        <div className="col-5">
          {low || 'N/A'}
        </div>
      </div>

      <div className="row stats__details">
        <div className="col-5">
          VOLUME
        </div>
        <div className="col-1">
          =
        </div>
        <div className="col-5">
          {volume || 'N/A'}
        </div>
      </div>

      <div className="row stats__details">
        <div className="col-5">
          LAST
        </div>
        <div className="col-1">
          =
        </div>
        <div className="col-5">
          {last || 'N/A'}
        </div>
      </div>

      <div className="row stats__details">
        <div className="col-5">
          VOLUME (30 day)
        </div>
        <div className="col-1">
          =
        </div>
        <div className="col-5">
          {volume30day || 'N/A'}
        </div>
      </div>
    </div>
  </div>
);

export default Stats;
