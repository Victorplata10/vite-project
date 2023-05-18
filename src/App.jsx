import './App.css'
import data from './data.json'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'

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
      <section>
        <footer>"This page was last edited on May 18, 2023 | Designed and devoloped by Victor | Privacy Policy"</footer>
      </section>
    </div>
  )
}

export default App
