import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import "rsuite/dist/rsuite.min.css";
import { Tooltip, Whisper } from "rsuite";
import { setClockData } from './store/Actions/ClockActions';
import './App.css';


function App() {
  const dispatch = useDispatch()
  const date = useSelector((state) => state.Clock.currentDate)

  const hoursDegrees = date.getHours() * 30 + date.getMinutes() / 2;
  const minutesDegrees = date.getMinutes() * 6 + date.getSeconds() / 10;
  const secondsDegrees = date.getSeconds() * 6;

  useEffect(() => {
    setInterval(() => {
      handleClock()
    }, 1000)
  }, [])

  const handleClock = () => {
    dispatch(setClockData(new Date()))
  }

  const divStyleHours = {
    transform: "rotateZ(" + hoursDegrees + "deg)"
  };

  const divStyleMinutes = {
    transform: "rotateZ(" + minutesDegrees + "deg)"
  };

  const divStyleSeconds = {
    transform: "rotateZ(" + secondsDegrees + "deg)"
  };

  return (
    <div className="App">
      <Whisper
        followCursor
        placement='topStart'
        speaker={<Tooltip>
          {date.getHours() + ":" + date.getMinutes()}
        </Tooltip>}
      >
        <div className="clock-container styling">
          <div id="clock" className="clock-content">
            <div
              className={
                "hand hours-hand " +
                (date.getHours() === 0 ? "" : "transition-effect")
              }
              style={divStyleHours}></div>
            <div
              className={
                "hand minutes-hand " +
                (date.getMinutes() === 0 ? "" : "transition-effect")
              }
              style={divStyleMinutes}></div>
            <div
              className={
                "hand seconds-hand " +
                (date.getSeconds() === 0 ? "" : "transition-effect")
              }
              style={divStyleSeconds}></div>
            <div className="indicator-cover"></div>
          </div>
        </div>
      </Whisper>
    </div>
  );
}

export default App;
