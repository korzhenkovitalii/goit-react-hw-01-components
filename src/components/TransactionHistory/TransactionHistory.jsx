import PropTypes from 'prop-types';
// import {  } from './FriendList.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};
