import { useState } from "react";
import './App.css';

function App() {
  const [weight, setWeight] = useState("")
  const [bottles, setBottles] = useState("")
  const [time, setTime] = useState("")
  const [result, setResult] = useState(Number)

  const calculate = (e) => {
    e.preventDefault()
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)
    if (document.getElementById("gender_Male").checked) {
      const calculating = gramsLeft / (weight * 0.7)
      if (calculating < 0) {
        setResult(0)
      } else {
        setResult(calculating)
      }
    } else if (document.getElementById("gender_Female").checked) {
      const calculating = gramsLeft / (weight * 0.6)
      if (calculating < 0) {
        setResult(0)
      } else {setResult(calculating)
      }
    }
  }

  return (
    <div className='background'>
      <h2>Calculating alcohol blood level</h2>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <select type="number" value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select type="number" value={time} onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" id="gender_Male" value="Male"/>
          <label for="gender_Male">Male</label>
          <input type="radio" name="gender" id="gender_Female" value="Female" />
          <label for="gender_Female">Female</label>
        </div>
        <div>
          <output>{result.toFixed(1)}</output>
        </div>
          <button>Calculate</button>
      </form>
    </div>
    
  );
}

export default App;
