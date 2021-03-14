import { GET_ALL_WALLET, ADD_WALLET, CHECK_BALANCE, ADD_FUND, SPEND_FUND, ALL_TRANS } from './ActionType';

export const getAllWallet = () => {
 return {
  type: GET_ALL_WALLET
 }
};

export const addWallet = (obj) => {
 return {
  type: ADD_WALLET,
  obj
 }
};

export const checkBalance = (id) => {
 return {
  type: CHECK_BALANCE,
  id
 }
};

export const addFund = (obj) => {
 return {
  type: ADD_FUND,
  obj
 }
};

export const spendFund = (obj) => {
 return {
  type: SPEND_FUND,
  obj
 }
};

export const getAllTrans = () => {
 return {
  type: ALL_TRANS
 }
};



