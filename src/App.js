import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [activeUrl, setActiveUrl] = useState("");
  useEffect(() => {
    window.chrome.tabs.getSelected(null, (tab)=> {
      setActiveUrl(tab.url)
    });
  });
  return (
    <div className="app">
        <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" alt="logo" className="qr" />
        <p className="message">Scan the above QR from your phone to open this active link in your mobile device.</p>
        {
          activeUrl
        }
    </div>
  );
}

export default App;
