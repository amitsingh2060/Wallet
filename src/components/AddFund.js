import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllWallet, checkBalance, addFund } from "../actions/ActionCard";

class AddFund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      amount: 0,
    };
  }
  getBalacefrmId = (value) => {
    this.setState({ id: value });
    this.props.checkBalance(value);
  };

  handleStateChange = (state, value) => {
    this.setState({ [state]: value });
  };

  addFund = () => {
    let obj = {
      id: this.state.id,
      amount: parseInt(this.state.amount),
    };
    this.props.addFund(obj);
  };

  render() {
    return (
      <div>
        <h2>Add Fund</h2>
        <label>User : </label>
        <select onChange={(e) => this.getBalacefrmId(e.target.value)}>
          <option value="">select</option>
          {this.props.WalletList &&
            this.props.WalletList.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
        </select><br/><br/>
        {this.props.balance && (
          <div>
            <div>
              <label>Amount : </label>
              <input
                type="text"
                value={this.state.value}
                onChange={(e) => this.handleStateChange("amount", e.target.value)}/>
            </div><br/>
            <input
              type="button"
              value="Add Fund"
              onClick={() => this.addFund()}/>
          </div>
        )}
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
    addFund: (obj) => {
      dispatch(addFund(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFund);
