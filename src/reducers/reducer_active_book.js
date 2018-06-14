// State arguement is not application state, rather state this reducer is
// responsible for
export default function(state = null, action){ // - null is es6 for undefined handling
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
