import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../common/Loading';
import ProjectItem from './ProjectItem';
import { getProjects } from '../../actions/projectAction';

class Projects extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects, loading } = this.props.project;
    let projectItems;

    if (projects === null || loading) {
      projectItems = <Loading/>
    } else {
      if (projects.length > 0) {
        projectItems = projects.map(project => (
          <ProjectItem key={project._id} project={project} />
        ));
      } else {
        projectItems = <h4>No Projects Available</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Projects</h1>
              <p className="lead text-center">
                Browse Projects and connect with developers
              </p>
              {projectItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProjects })(Projects);
