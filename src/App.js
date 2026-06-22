import logo from './logo.svg';
import './App.css';
import FunctionalComposing from './functional/FunctionalComposing';
import Currying from './functional/Currying';
import Objects from './functional/Objects';
import Arrays from './functional/Arrays';
function App() {
  return (
    <>
      <FunctionalComposing></FunctionalComposing>
      <Currying></Currying>
      <Objects></Objects>
      <Arrays></Arrays>
    </>
  );
}

export default App;
