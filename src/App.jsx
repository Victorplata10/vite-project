import './App.css'
import data from './data.json'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Title from './components/Title/Title'
import SideBar from './components/SideBar/SideBar'

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
      <SideBar />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
