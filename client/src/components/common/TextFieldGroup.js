import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames"

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    errors,
    info,
    type,
    onChange,
    disabled
}) => {
    return (
        <div className="form-group">
                  <input
                    type={type}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors
                    })}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled = {disabled}
                  />
                  {info && (<small className="form-text text-muted">{info}</small>)}
                  {errors && (
                    <div className="invalid-feedback">{errors}</div>
                  )}
                </div>
    )
}

TextFieldGroup.propTypes = {
    name : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    value : PropTypes.string.isRequired,
    errors : PropTypes.string,
    info : PropTypes.string,
    type : PropTypes.string,
    onClick : PropTypes.func.isRequired,
    disabled : PropTypes.string

}

TextFieldGroup.defaultProps = {
    type : 'text'
}

export default TextFieldGroup;
