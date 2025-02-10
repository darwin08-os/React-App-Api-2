import { useState } from 'react';
import './App.css';

function App() {  


  var [temprature,setTemprature] = useState('');

  let fetchTemp=()=>{
  var location = document.getElementById("loc").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={YOUR API ID}&units=metric`) // remove { } <- in api id
  .then((res)=>{


    res.json()
    .then((resp)=>{
      setTemprature(resp.main.temp)
    })
    .catch((error)=>{    // for res.json()
      console.log(error)
    })


  })
  .catch((err)=>{    //for fetch
    console.log(err)
  })
  }
  return (
    <div className="App">

      <div className="row">
        <div className="col-2">
          <input type="text" id='loc' className='my-2' />
        </div>
        <div className="col-1">
          <button onClick={fetchTemp} className='btn btn-primary'>click me</button>
        </div>
      </div>

      <div className="row">
        <div className="col-2 temprature">
          <p>{temprature}</p>
        </div>
      </div>
      

    </div>
  );
}

export default App;
