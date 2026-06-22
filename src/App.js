import logo from './logo.svg';
import './App.css';
import FunctionalComposing from './functional/FunctionalComposing';
import Currying from './functional/Currying';
import Objects from './functional/Objects';
import Arrays from './functional/Arrays';
import Immutable from './ImmutableProvider/Immutable';
import Immer from './ImmutableProvider/Immer'
function App() {
  return (
    <>
      <FunctionalComposing></FunctionalComposing>
      <Currying></Currying>
      <Objects></Objects>
      <Arrays></Arrays>
      <Immutable></Immutable>
      <Immer></Immer>
    </>
  );
}

export default App;
