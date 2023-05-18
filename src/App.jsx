import './App.css'
import data from './data.json'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Title />
      <main>
      <div className="map">
        {data.centers.map((center) => (
          <Main center={center} key={center.name} />
        ))}
      </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
