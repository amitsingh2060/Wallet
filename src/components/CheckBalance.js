import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllWallet, checkBalance } from "../actions/ActionCard";

class ChkBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getBalacefrmId = (value) => {
    this.props.checkBalance(value);
  };

  render() {
    return (
      <div>
      <h2>Check Balance</h2>
        <label>User : </label>
        <select onChange={(e) => this.getBalacefrmId(e.target.value)}>
          <option value="">select</option>
          {this.props.WalletList &&
            this.props.WalletList.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
        </select>
        <br/>
        <br/>
        <label>Your current balance : {this.props.balance}</label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    WalletList: state.arrWallet,
    balance: state.objWallet,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllWallet: () => {
      dispatch(getAllWallet());
    },
    checkBalance: (id) => {
      dispatch(checkBalance(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChkBalance);
