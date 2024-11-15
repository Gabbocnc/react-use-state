import { useState } from 'react'
import data from './data/languages'

import './App.css'

function App() {
  const [activeIndex, setActiveIndex] = useState(null);


  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <h2 className='title'>Learn Web Development</h2>
      {/*  Barra di Navigazione */}
      <ul className="nav">
        {data.map((language, index) => (
          <li
            key={language.id}
            className={`nav-item ${activeIndex === index ? 'active' : 'hide'}`}
            onClick={() => handleClick(index)}
          >
            {language.title}
          </li>
        ))}
      </ul>
      {/* Contenuto */}
      <div className="content">
        <div className="content-box">
          {data[activeIndex] && (
            <div>
              <h3>{data[activeIndex].title}</h3>
              <p>{data[activeIndex].description}</p>
            </div>
          )}
          {!data[activeIndex] && <p>Nessun linguaggio selezionato</p>}
        </div>
      </div>
    </div>
  );
}
export default App
