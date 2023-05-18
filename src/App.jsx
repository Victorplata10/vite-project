import './App.css'
import data from './data.json'
import Main from './components/Main/Main'

const App = () => {
  return (
    <div className="App">
      <nav>
    <section>
      <div className="cancers"><a href = "https://curesearch.org/Types-of-Childrens-Cancer?gclid=CjwKCAjw9pGjBhB-EiwAa5jl3P2bJal3lgfEW2W8d0qwIakCmelqBALhjeX4dPW9h5JvSLJRDADI6BoCd40QAvD_BwE">Cancers</a></div>
      <div className="doctors"><a href="https://health.usnews.com/doctors">Doctors</a></div>
      <div className="health"><a href="https://health.usnews.com/wellness/fitness">Health & Fitness</a></div>
      <div className="diet"><a href = "https://www.cdc.gov/healthyweight/healthy_eating/index.html">Diets and Nutrition</a></div>
      <div className="supplements"><a href = "https://www.health.harvard.edu/newsletter_article/supplements-a-scorecard">Supplements</a></div>
      <div className="mental"><a href = "https://www.mind.org.uk/information-support/types-of-mental-health-problems/">Mental Health</a></div>
    </section>
  </nav>
  

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
