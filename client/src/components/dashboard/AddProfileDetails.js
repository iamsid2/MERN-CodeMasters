import React from 'react'
import {Link} from 'react-router-dom'

export function AddProfileDetails() {
    return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education
      </Link>
      <Link to="/add-project" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Project
      </Link>
    </div>
    )
}
