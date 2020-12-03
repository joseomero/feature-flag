import logo from './logo.svg';
import './App.css';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import HelloWorld from './Helloworld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloWorld />
    </div>
  );
}

export default withLDProvider({
  clientSideID: '5f725861afc6600aac473bd2',
  user: {
      "key": "vvmfQ99VQ1",
      "name": "Joe Romeo",
      "email": "vmohamed.taza.90f@rancilan.gq"
  }
})(App);
