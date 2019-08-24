import React from 'react';
import logo from './logo.svg';
//import blueRight from './images/blue-background.svg'
//import yellowLower from './images/yellow-lower.svg'
import desktopImage from './images/desktop-background.svg'
import mobileImage from './images/blue-background.svg'
import { IconContext } from 'react-icons'
import { FaFacebookSquare } from 'react-icons/fa'
import './App.css';


function App() {
  const imageUrl = window.innerWidth >= 650 ? desktopImage: mobileImage;

  const appStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    position: 'relative',
    width: '100%'

  }
  return (
    <div className="App" style={appStyle}>
      <div className="Nav">
        <IconContext.Provider value={{ color: "white", className: "Icons" }}>
          <div className="Icons">
              <a href="https://www.facebook.com/groups/584531622044605"><FaFacebookSquare /></a>
          </div>
        </IconContext.Provider>
        <nav>
          <a href="#top"><b>Home</b></a>
          <a href="#top"><b>Schedule</b></a>
          <a href="#top"><b>Contact</b></a>
          <a href="#top"><b>About</b></a>
        </nav>
      </div>
      
      <div className="Body">
        <p><b>Love Anime?!{"\n"}</b>
        Come join us and make some new friends{"\n"}
        all around a common interest!{"\n"}
        We have a bunch of events coming up.{"\n"}
        We hope to see you there!{"\n"}
        
        <button>Join us!</button>
        </p>
      </div>
    </div>
  );
}

export default App;
