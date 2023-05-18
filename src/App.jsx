import './App.css'
import data from './data.json'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <h1 className="title">Hospital Centers</h1>
      <div className="map">
        {data.centers.map((center) => (
          <Main center={center} key={center.name} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
