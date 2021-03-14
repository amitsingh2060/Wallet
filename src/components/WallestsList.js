import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllWallet } from "../actions/ActionCard";

class WalletsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td><b>Name</b></td>
            <td><b>Phone</b></td>
            <td><b>Balance (Rs)</b></td>
          </tr>
        </thead>
        <tbody>
          {this.props.WalletList &&
            this.props.WalletList.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.balance}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    WalletList: state.arrWallet,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllWallet: () => {
      dispatch(getAllWallet());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletsList);
