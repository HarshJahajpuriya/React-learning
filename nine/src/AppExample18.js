import React from 'react';


const AppExample18 = () => {

  const items = [
    {code: 101, name: "Printer", stockInHand: 50},
    {code: 102, name: "Laptop", stockInHand: 34},
    {code: 103, name: "Desktop", stockInHand: 67}
  ]

  // transactionReducer function is a pure function
  const transactionReducer = (state, action) => {
    var i = [];
    var e = 0;
    while(e<state.length) {
      if(state[e].code === action.code) {
        if(action.transactionType === 'PURCHASE') {
          i.push({...state[e], stockInHand: state[e].stockInHand+1});
        } else if(action.transactionType === 'SALE') {
          i.push({...state[e], stockInHand: state[e].stockInHand-1 < 0 ? 0 : state[e].stockInHand-1});
        } else {
          i.push({...state[e]});
        }
      } else {
        i.push({...state[e]});
      }
      e++;
    }
    return i;
  }

  const [inventory, dispatchTransaction] = React.useReducer(transactionReducer, items);
  // First time, the ITEMS will be assigned to inventory, 
  // and whenever DISPATCHTRANSACTION function is called the TRANSACTIONREDUCER function will be invoked
  // to transactionReducer function the inventory will be passed as the state, 
  // and whatever is passed to dispatchTransaction function will be passed to transactionReducer function as action
  // and whatever the transactionReducer function returns will get assigned to the inventory.
  // And the component will get re-rendered.

  return (
    <div>
      <h1>List Of Items</h1>
      <ul>
      {
        inventory.map((item) => {
          return (
            <li key={item.code}>
              {item.name}  ({item.stockInHand}) &nbsp;&nbsp; 
              <button onClick={() => { dispatchTransaction({code: item.code, transactionType:'PURCHASE'}); }}>Purchase</button> &nbsp;&nbsp; 
              <button onClick={() => { dispatchTransaction({code: item.code, transactionType:'SALE'}) }}>Sale</button>
            </li>
          )
        })
      }
      </ul>
    </div>
  );
  
}

export default AppExample18;
