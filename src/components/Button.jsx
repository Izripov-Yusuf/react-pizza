import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

function Button({ className, outline, add, onClick, children }) {
  return (
    <button className={classNames('button', className, {
      'button--outline': outline,
      'button--add': add
    })} onClick={onClick}>{ children }</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button;
