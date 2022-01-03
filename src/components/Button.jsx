import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

function Button({ className, outline, onClick, children }) {
  return (
    <button className={classNames('button', className, {
      'button--outline': outline
    })} onClick={onClick}>{ children }</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button;
