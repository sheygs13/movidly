import React from 'react';
import Header from './components/Header';
import Search from './components/Search';

import './App.css';

function App() {
  return (
    <main>
        <Header/>
        <section>
          <div className="wrapper">
              <Search/>
              <div className="movies_list">
                  <div className="movies_list--item">

                  </div>
              </div>
          </div>
        </section>
    </main>  
  );
}

export default App;
