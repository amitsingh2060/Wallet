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
        <div>
          <label>Name: </label>
          <br />
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleStateChange("name", e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Phone: </label>
          <br />
          <input
            type="text"
            value={this.state.phone}
            onChange={(e) => this.handleStateChange("phone", e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Balance: </label>
          <br />
          <input
            type="text"
            value={this.state.balance}
            onChange={(e) => this.handleStateChange("balance", e.target.value)}
          />
        </div>
        <div>
          <br />
          <input
            type="button"
            value="Submit"
            onClick={() => this.addWallet()}
          />
        </div>
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
