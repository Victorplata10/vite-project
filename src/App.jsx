import './App.css'
import centers from './my.json'
import Center from './components/Centers/Center'


const App = () => {

  return (
    <div>
      <h1>Hopsital Centers</h1>
      <div>
        {centers.map((center) => (
          <>
            <Center center={center} key={centers.name}/>
          </>
        ))}
      </div>
    </div>
  )
}

export default App