import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import {createCurrentProfile} from '../../actions/profileAction';

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            internship: '',
            address: '',
            status: '',
            skills: '',
            githubid: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            instagram: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    onSubmit(e){
      e.preventDefault();
        const newProfile = {
            username: this.state.username,
            internship: this.state.internship,
            address: this.state.address,
            status: this.state.status,
            skills: this.state.skills,
            githubid: this.state.githubid,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            instagram: this.state.instagram
        }
        console.log(newProfile);
        this.props.createCurrentProfile(newProfile, this.props.history);
    }
    render() {
        const {errors} = this.state;
        let socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );

    // Select options for status
    const options = [
      { label: '* Select Area of Work', value: 0 },
      { label: 'Web Developer', value: 'Web Developer' },
      { label: 'Android Developer', value: 'Android Developer' },
      { label: 'Machine Learning / Data Science', value: 'Machine Learning / Data Science' },
      { label: 'Graphic Designer', value: 'Graphic Designer' },
      { label: 'IOT', value: 'IOT' },
      { label: 'Robotics', value: 'Robotics' },
      { label: 'Other', value: 'Other' }
    ];
        return (
            <div className="create-profile">
             <div className="container">
              <div className="row">
               <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Create Your Profile</h1>
                <p className="lead text-center">
                Let's get some information to make your profile stand out
                </p>
               <small className="d-block pb-3" style={{color:'red'}}>(*) required fields</small>
               <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  errors={errors.username}
                  info="A unique username for your profile URL"
                />
                <SelectListGroup
                  placeholder="Area of Work"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                  info="The field in which you are working"
                />
                <TextFieldGroup
                  placeholder="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  errors={errors.address}
                  info="Enter your address"
                />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  errors={errors.skills}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <TextFieldGroup
                  placeholder="Internship"
                  name="internship"
                  value={this.state.internship}
                  onChange={this.onChange}
                  info="Internship Done (if any)"
                />
                <TextFieldGroup
                  placeholder="Github Id"
                  name="githubid"
                  value={this.state.githubid}
                  onChange={this.onChange}
                  errors={errors.githubid}
                  info="If you want your latest repos and a Github link, include your GithubId"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us something about yourself"
                />

                {/* <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div> */}
                <br/>
                <h5>Add Social Network Links</h5>
                {socialInputs}
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
        )
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps,{createCurrentProfile})(withRouter(CreateProfile));