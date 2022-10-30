import { utcToZonedTime } from 'date-fns-tz';
import './App.css';

function App() {

  const TIMEZONE_MAP = {
    LOS_ANGELES: 'America/Los_Angeles',
    KOLKATA: 'Asia/Kolkata',
    PERTH: 'Australia/Perth',
    UTC: 'Etc/UTC',
  }

  const localDate = new Date()
  const currentDate = new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), 0, 0, 0)

  const getTimeOfTimezones = () => {
    const timeList = Object.keys(TIMEZONE_MAP).map((key, index) => {
      const tz = TIMEZONE_MAP[key]
      const d = utcToZonedTime(currentDate.toISOString(), tz)
      return (
        <tr key={`${tz}-${index}`}>
          <td>{tz}</td>
          <td>{d.toLocaleString()}</td>
        </tr>
      )
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Timezone</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {timeList}
        </tbody>
      </table>
    )
  }

  return (
    <div className="App">
      <section>
        Local Date - {localDate.toLocaleString()}
      </section>
      <section>
        {getTimeOfTimezones()}
      </section>
    </div>
  );
}

export default App;
