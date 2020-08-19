import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class ProjectItem extends Component {
  render() {
    const { project } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img src={project.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{project.projectname}</h3>
            <p>
              By <span>{project.user.name}</span> 
            </p>
            {/* <Link to={`/project/${project.id}`} className="btn btn-info">
              View Project
            </Link> */}
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Tech Stack</h4>
            <ul className="list-group">
              {project.stack.split(',').slice(0, 4).map((stack, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectItem;
