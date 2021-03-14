import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllWallet, checkBalance } from "../actions/ActionCard";

class CheckBalanc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  getBalacefrmId = (value) => {
    this.setState({ id: value });
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
        <br />
        <br />
        <label>
          Your current balance : {this.state.id ? this.props.balance : 0}
        </label>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckBalanc);
