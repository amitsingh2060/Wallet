import {
    GET_ALL_WALLET,
    ADD_WALLET,
    CHECK_BALANCE,
    ADD_FUND,
    SPEND_FUND,
    ALL_TRANS,
  } from "../actions/ActionType";
  
  const initState = {
    arrWallet: [
      { id: "85", name: "Name 1", phone: "9988999877", balance: "800" },
      { id: "86", name: "Name 2", phone: "7763423688", balance: "900" },
    ],
    arrTrans: [],
  };
  
  const reducerCard = (state = initState, action) => {
    
    if (action.type === GET_ALL_WALLET) {
      return {
        ...state,
      
      };
    }
   
    if (action.type === ADD_WALLET) {
      state.arrWallet.push(action.obj);
      return {
        ...state,
      };
    }
    
    if (action.type === CHECK_BALANCE) {
      let objWallet = state.arrWallet.filter((x) => x.id === action.id)[0];
      return {
        ...state,
        objWallet: objWallet ? objWallet.balance : 0,
      };
    }
  
    
    if (action.type === ADD_FUND) {
      let index = state.arrWallet.findIndex((x) => x.id === action.obj.id);
      if (state.arrWallet[index]) {
        state.arrWallet[index].balance =
          parseInt(state.arrWallet[index].balance) + action.obj.amount;
  
       
        let obj = {
          name: state.arrWallet[index].name,
          date: new Date(),
          amount: "+" + action.obj.amount,
          balance: state.arrWallet[index].balance,
        };
        state.arrTrans.push(obj);
      }
      return {
        ...state,
      };
     }
  
    
    if (action.type === SPEND_FUND) {
      let index = state.arrWallet.findIndex((x) => x.id === action.obj.id);
      if (state.arrWallet[index]) {
        state.arrWallet[index].balance =
          parseInt(state.arrWallet[index].balance) - action.obj.amount;
  
        
        let obj = {
          name: state.arrWallet[index].name,
          date: new Date(),
          amount: "-" + action.obj.amount,
          balance: state.arrWallet[index].balance,
        };
        state.arrTrans.push(obj);
      }
    }
  
    
    if (action.type === ALL_TRANS) {
      return {
        ...state,
        transList: state.arrTrans,
      };
    }
  
    else {
      return state;
    }
  };
  
  export default reducerCard;
  