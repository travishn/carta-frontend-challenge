import React from 'react';

class App extends Component {
  renderDepartments() {
    const departments = Object.keys(this.props.journeyData);
    return departments.map(department => {
      if (department === 'Home') {
        return (
          <div key={department}>
          </div>
        )
      } else {
        return (
          <div key={department}>
            <i className="fa fa-angle-down"></i>
          </div>
        )
      }
    }
    );
  }

  render() {
    console.log(this.props.journeyData);
    return (
      <div className="App">
        <section className="department-wrapper">
          {this.renderDepartments()}
        </section>
      </div>
    );
  }
}

export default App;