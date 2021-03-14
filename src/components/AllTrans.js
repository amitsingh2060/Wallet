import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllTrans } from '../actions/ActionCard';

class AllTrans extends Component {
 constructor(props) {
  super(props);
  this.state = {
   data: ''
  }
 }
 render() {
  return (
   <table>
    <thead>
     <tr>
      <td><b>Name</b></td>
      <td><b>Date</b></td>
      <td><b>Amount (Rs)</b></td>
      <td><b>Balance (Rs)</b></td>
     </tr>
    </thead>
    <tbody>
     {
      this.props.transList && this.props.transList.map((item, key) => {
       return (
        <tr key={key}>
         <td>{item.name}</td>
         <td>{new Date(item.date).toLocaleDateString()}</td>
         <td>{item.amount}</td>
         <td>{item.balance}</td>
        </tr>
       );
      })
     }
    </tbody>
   </table>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  transList: state.arrTrans
 }
}
const mapDispatchToProps = (dispatch) => {
 return {
  getAllTrans: () => { dispatch(getAllTrans()) }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTrans)