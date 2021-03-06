import Particles from 'react-particles-js';
import './App.css';
import Text from './text.js' ;

function App() {
  return (
    <div className="App">




        <Particles className = "particles"

          params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 5
                }
            },"opacity": {
  "value": 1,
  "random": true, // Set to false in our case
  "anim": {
    "enable": true,
    "speed": 8,
    "opacity_min": 0.4,
    "sync": false
  }
},
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
          }}


           />





            <Text className ='text'/>













    </div>

  );
}

export default App;
