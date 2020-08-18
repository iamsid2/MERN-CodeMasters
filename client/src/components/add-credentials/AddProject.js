import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProject } from '../../actions/projectAction';

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectname:'',
      stack:'',
      description:'',
      from:'',
      to:'',
      current: false,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const projectData = {
      projectname: this.state.projectname,
      stack: this.state.stack,
      description: this.state.description,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current
    };

    this.props.addProject(projectData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Project</h1>
              <p className="lead text-center">
                Add details about your Projects
              </p>
              <small className="d-block pb-3" style={{color:'red'}}>(*) required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Project Name"
                  name="projectname"
                  value={this.state.projectname}
                  onChange={this.onChange}
                  errors={errors.projectname}
                />
                <TextFieldGroup
                  placeholder="* Tech Stack used for the project"
                  name="stack"
                  value={this.state.stack}
                  onChange={this.onChange}
                  errors={errors.stack}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.onChange}
                  errors={errors.from}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.onChange}
                  errors={errors.to}
                  disabled={this.state.disabled ? 'disabled' : ''}
                />
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    Current
                  </label>
                </div>
                <TextAreaFieldGroup
                  placeholder="Project Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Tell us about the Project"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  addProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
  errors: state.errors
});

export default connect(mapStateToProps, { addProject })(
  withRouter(AddProject)
);
