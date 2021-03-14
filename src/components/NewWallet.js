import React, { Component } from "react";
import { connect } from "react-redux";
import { addWallet } from "../actions/ActionCard";

class NewWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      balance: "",
    };
  }

  handleStateChange = (state, value) => {
    this.setState({ [state]: value });
  };

  addWallet = () => {
    let obj = {
      id: Math.floor(Math.random() * 100),
      name: this.state.name,
      phone: this.state.phone,
      balance: this.state.balance,
    };
    this.props.addWallet(obj);
  };

  render() {
    return (
      <div>
        <h2>New Wallet</h2>

        <label>Name : </label>
        <br />
        <input
          type="text"
          onChange={(e) => this.handleStateChange("name", e.target.value)}
        />
        <br />

        <label>Phone : </label>
        <br />
        <input
          type="text"
          onChange={(e) => this.handleStateChange("phone", e.target.value)}
        />
        <br />

        <label>Balance : </label>
        <br />
        <input
          type="text"
          onChange={(e) => this.handleStateChange("balance", e.target.value)}
        />
        <br />
        <br />

        <input type="button" value="Submit" onClick={() => this.addWallet()} />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    //WalletList: state.arrWallet
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addWallet: (obj) => {
      dispatch(addWallet(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewWallet);
