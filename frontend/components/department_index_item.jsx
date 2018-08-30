import React from 'react';

class DepartmentIndexItem extends React.Component {
  renderStages() {
    const stages = this.props.info.events;
    return stages.map(event => (
      <li key={event}>
        {event}
      </li>
    ))
  }

  renderTime() {
    const time = this.props.info.duration;
    const days = Math.floor(time / 1440);
    const hours = ((time / 60) - (days * 24));

    return <p>{days === 0 ? null : `${days}d:`}{hours === 0 ? null : `${hours}h`}</p>
  }

  renderImage() {
    const { department } = this.props;
    if (department !== "Home") {
      return (
        <img className="time-icon" src="https://res.cloudinary.com/emanon/image/upload/v1535582635/iegirl6mfhqijg8lxjee.png" />
      )
    }
  }

  render() {
    const { department } = this.props;
    const cssSelector = department.split(' ').join('').toLowerCase();
    const containerHeight = this.props.info.duration / 60 * 2;
    return <div className="department-container" style={{ height: containerHeight }}>
      <div className="department-time">
        <h1 className={`${cssSelector}`}>{department}</h1>
        <div className="icon-time">
          {this.renderImage()}
          {this.renderTime()}
        </div>
      </div>

      <div className={`${cssSelector}-bar vertical-bar-container`}>
        <div className="vertical-bar">
          <div className={`${cssSelector}-edge circle-border`} />
        </div>
        <div className="vertical-bar">
          <div className={`${cssSelector}-edge circle-border`} />
        </div>
      </div>

      <ul className="stages">{this.renderStages()}</ul>
    </div>;
  }
}

export default DepartmentIndexItem