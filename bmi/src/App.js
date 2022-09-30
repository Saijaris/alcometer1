
import { useState } from 'react';
import './App.css';

function App() {
  const [pituus, setPituus] = useState("")
  const [paino, setPaino] = useState("")
  const [bmi, setBmi] = useState("")

  /* uudempi tapa kirjoittaa funktio */
  const laske = (e) => {
    e.preventDefault()
    //const tulos = paino / Math.pow(pituus,2)
    const tulos = paino / (pituus * pituus)
    setBmi(tulos)
  }

  return (
    <div className='tausta'>
      <h3>Painoindeksi</h3>
      <form onSubmit={laske}>
        <div>
          <label>Pituus</label>
          <input type="number" value={pituus} onChange={e => setPituus(e.target.value)}/>
        </div>
        <div>
          <label>Paino</label>
          <input type="number" value={paino} onChange={e => setPaino(e.target.value)}/>
        </div>
        <div>
          <label>Painoindeksi</label>
          <output>{bmi.toFixed(1)}</output>
          </div>
          <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
