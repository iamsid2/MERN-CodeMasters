const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProjectInput(data) {
    var errors = {}
    data.projectname = !isEmpty(data.projectname) ? data.projectname : '';
    data.stack = !isEmpty(data.stack) ? data.stack : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if(Validator.isEmpty(data.projectname)) {
        errors.projectname = "Project Name is Required";
    }
    if(Validator.isEmpty(data.stack)) {
        errors.stack = "Project Tech Stack is Required";
    }
    if(Validator.isEmpty(data.from)) {
        errors.from = "Project Starting date is Required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}