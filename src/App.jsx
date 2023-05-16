import './App.css'
import data from './data.json'
import Main from './components/Main'

const App = () => {
  return (
    <div className='App'>
      <h1 className='title'>Hopsital Centers</h1>
      <div className='map'>
        {data.centers.map((center) => (
            <Main center={center} key={center.name} />
        ))}
      </div>
    </div>
  )
}

export default App
