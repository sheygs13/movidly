import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <section>
        <div className="wrapper">
          <Search />
        </div>
      </section>
    </main>
  );
}

export default App;
