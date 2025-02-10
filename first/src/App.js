import { useState } from 'react';
import './App.css';

function App() {
  let [temprature, setTemprature] = useState('');
  let [location, setLocation] = useState('')
  let [url, setUrl] = useState(null)
  const handleInout = (e) => {
    setLocation(e.target.value)
  }
  let fetchTemp = () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`)
      .then((res) => {
        res.json()
          .then((resp) => {
            setTemprature(resp.main.temp)
          })
          .catch((error) => {    // for res.json()
            console.log(error)
          })
      })
      .catch((err) => {    //for fetch
        console.log(err)
      })

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${location}&client_id=YOUR_CLIENT_ID`)
      .then((respons) => {
        respons.json().then((data) => {
          setUrl(data.results[0].urls.small)
        })
      })
  }
  return (
    <div className="App">
      <div className="container">

        <div className="row">
          <div className="col-2">
            <input type="text" onChange={handleInout} className='my-2' />
          </div>
          <div className="col-1">
            <button onClick={fetchTemp} className='btn btn-primary'>click me</button>
          </div>
        </div>

        <div className="row">
          <div className="col-2 temprature">
            <p>{temprature}</p>
            <img src={url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
