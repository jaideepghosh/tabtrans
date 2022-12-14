import React, {useEffect, useState} from "react";
import QRCode from "qrcode.react";
import './App.css';

function App() {
  const [activeUrl, setActiveUrl] = useState(window.location.toString());
  useEffect(() => {
    if(window.chrome && window.chrome.tabs && window.chrome.tabs.getSelected){
      window.chrome.tabs.getSelected(null, (tab)=> {
        setActiveUrl(tab.url)
      });
    }
  });
  return (
    <>
    <div className="app">
      <div className="vertical-center">
        <QRCode value={activeUrl} className="qr" />
        <p className="message">Scan the above QR from your phone to open this active link in your mobile device.</p>
      </div>
    </div>
    <div class="footer">
      <p>Developed with ❤️ by <a href="https://jaideep.xyz/" target="_blank" rel="noreferrer">Jaideep Ghosh</a></p>
    </div>
    </>
  );
}

export default App;
