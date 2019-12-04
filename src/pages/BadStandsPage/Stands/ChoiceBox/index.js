import React from 'react';
import PropTypes from 'prop-types';
import {
  BoxChoice,
  ChoiceBorder,
} from './styles';

const ChoiceBox = ({
  onClick,
  children,
  ...rest
}) => (
  <ChoiceBorder {...rest}>
    <BoxChoice role="presentation" onClick={onClick}>
      {
        children
      }
    </BoxChoice>
  </ChoiceBorder>
);

ChoiceBox.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

ChoiceBox.defaultProps = {
  children: null,
  onClick: undefined,
};

export default ChoiceBox;
