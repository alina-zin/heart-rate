import './App.css';
import {useState} from 'react';
function App() {

  const [age, setAge] = useState(0);
  const [minrate, setMinRate] = useState(0);
  const [maxrate, setMaxRate] = useState(0);

  function rate(e) {
    e.preventDefault();

    let min = (220 - age) * 0.65;
    setMinRate(min);

    let max = (220 - age) * 0.85;
    setMaxRate(max);
  }

  return (
    <div>
      <h2>Heart rate limits calculator</h2>
      <form onSubmit={rate}>
      <div>
        <label>Age</label>
        <input type="number" value = {age} onChange={e => setAge(e.target.value)}/>
      </div>
      <div>
        <label>Heart rate limits: </label>
        <output>{minrate}</output>
        <label> - </label>
        <output>{maxrate}</output>
      </div>
      <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
