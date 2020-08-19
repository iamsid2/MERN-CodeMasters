import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteProject } from '../../actions/projectAction';

class Project extends Component {
  onDeleteClick(id) {
    this.props.deleteProject(id);
  }

  render() {
    const project = this.props.project.map(pro => (
      <tr key={pro._id}>
        <td>{pro.projectname}</td>
        <td>{pro.stack}</td>
        <td>
          <Moment format="YYYY/MM/DD">{pro.from}</Moment> -
          {pro.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{pro.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, pro._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Project Details</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Tech Stack</th>
              <th>Time Period</th>
              <th />
            </tr>
            {project}
          </thead>
        </table>
      </div>
    );
  }
}

Project.propTypes = {
  deleteProject: PropTypes.func.isRequired
};

export default connect(null, { deleteProject })(Project);
