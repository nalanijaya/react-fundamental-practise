import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter  from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';

function App() {
  return (
    <div className="App">
      <Profile name="Nalani" lastname="Test1">
        <h3>This is a profile of a person</h3>
      </Profile>
      <Counter></Counter>
      <Resume name="Kumarasiri"></Resume>
      <FunctionEvent></FunctionEvent>
      {/* <Message messagecode="10" messagecontent="This is a message from props"></Message> */}
    </div>
  );
}

export default App;
