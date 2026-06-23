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
import * as actions from './Actions/actionTypes'
import * as creator from './Actions/ActionCreatorBug' 
function App() {
  
      store.subscribe(()=>{
        console.log("Subscribed:",store.getState());
        console.log(store);
      });

      store.dispatch(creator.add());

      store.dispatch(creator.resolve(1));

  return (
    <>
      <Bugs></Bugs>
    </>
  );
}

export default App;
