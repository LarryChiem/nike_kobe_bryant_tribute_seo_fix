import React from 'react';
import logo from './nike_PNG9.png';
import './App.css';

function App() {
  return (
      <div className="quote-container">
          <p>Along with millions of athletes</p>
          <p>and fans throughout the world,</p>
          <p>we are devastated by</p>
          <p>today's tragic news.</p>
          <p>We extend our deepest</p>
          <p>sympathies</p>
          <p>to those closest to Kobe,</p>
          <p>especially his family and friends.</p>
          <br></br>
          <p>He was one of the greatest</p>
          <p>athletes of his generation and</p>
          <p>has had an immeasurable impact</p>
          <p>on the world of sport and the</p>
          <p>community of basketball.</p>
                  <br></br>
          <p>He was a beloved member</p>
          <p>of the Nike family.</p>
          <p>We will miss him greatly.</p>
          <p>Mamba forever.</p>
              <img src={logo} className={logo} alt={'kobe'}/>
      </div>
  );
}

export default App;
