const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';
  data.address = !isEmpty(data.address) ? data.address : '';

  if (!Validator.isLength(data.username, { min: 2, max: 40 })) {
    errors.username = 'Username needs to between 2 and 4 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Profile Username is required';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }

  if (Validator.isEmpty(data.address)) {
   errors.address = 'Address field is required';
    }

  // if (!isEmpty(data.githubid)) {
  //   if (!Validator.isURL(data.githubid)) {
  //     errors.githubid = 'Not a valid URL';
  //   }
  // }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
