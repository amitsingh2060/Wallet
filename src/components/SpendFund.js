import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllWallet, checkBalance, spendFund } from "../actions/ActionCard";

const initial = {
  id: '',
  amount: ''
}
class SpendFund extends Component {
  state = initial
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: "",
  //     amount: "",
  //   };
  // }

  getBalacefrmId = (value) => {
    this.setState({ id: value });
    this.props.checkBalance(value);
  };

  handleStateChange = (state, value) => {
    this.setState({ [state]: value });
  };

  spendFund = () => {
    let obj = {
      id: this.state.id,
      amount: parseInt(this.state.amount),
    };
    this.props.spendFund(obj);
    this.setState(initial)
  };

  render() {
    return (
      <div>
        <h2>Spend Fund</h2>
        <label>User : </label>
        <select onChange={(e) => this.getBalacefrmId(e.target.value)}>
          <option value="">select</option>
          {this.props.WalletList &&
            this.props.WalletList.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
        </select><br /><br />
        {this.state.id && (
          <div>
            <div>
              <label>Amount : </label>
              <input
                type="text"
                value={this.state.amount}
                onChange={(e) =>
                  this.handleStateChange("amount", e.target.value)
                }
              />
            </div><br />
            <input
              type="button"
              value="Spend Fund"
              onClick={() => this.spendFund()}
            />
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
    spendFund: (obj) => {
      dispatch(spendFund(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpendFund);
