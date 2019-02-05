import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

export const TaxRow = ({ description, amount, sum, minus }) => (
  <TableRow>
    <TableCell>
      {minus ? '- ' : ''}
      {description}
    </TableCell>
    <TableCell align="right">
      <Typography color={minus ? 'secondary' : 'default'}>{amount}</Typography>
    </TableCell>
    <TableCell align="right">{sum}</TableCell>
  </TableRow>
);

TaxRow.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sum: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  minus: PropTypes.bool,
};

TaxRow.defaultProps = {
  amount: '',
  minus: false,
  sum: '',
};

export default TaxRow;
