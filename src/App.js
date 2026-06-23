import logo from './logo.svg';
import './App.css';
import FunctionalComposing from './functional/FunctionalComposing';
import Currying from './functional/Currying';
import Objects from './functional/Objects';
import Arrays from './functional/Arrays';
import Immutable from './ImmutableProvider/Immutable';
import Immer from './ImmutableProvider/Immer'
import store from './store';
import { type } from '@testing-library/user-event/dist/type';     
import Bugs from './Bugs';

function App() {
  store.subscribe(()=>{
    console.log("Subscribed:",store.getState());
  });

  store.dispatch({
    type : "BUG_ADDED",
    payload : {
      description:"Bug added"
    }
  });

  store.dispatch({
    type : "BUG_RESOLVED",
    payload : {
      id:1
    }
  });

  return (
    <>
      <Bugs></Bugs>
    </>
  );
}

export default App;
