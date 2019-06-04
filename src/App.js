import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import QRCode from 'qrcode';


function App() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    QRCode.toDataURL("https://www.npmjs.com/package/react-app-polyfill")
    .then(url => {
      console.log(url)
      setUrl(url);
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={url} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
