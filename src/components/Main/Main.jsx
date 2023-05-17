import Images from '../ImageInfo/Images'
import Specialty from '../Specialty/Specialty'
import ContactInfo from '../ContactInfo/ContactInfo'

const Main = (props) => {
  return (
    <div>
      <h2>{props.center.name}</h2>
      <header>
      <Images image={props.center.image} />
      </header>
      <p> Rating: {props.center.rating}</p>
      <h4>
        {props.center.city}, {props.center.state}
      </h4>
      <Specialty specialty={props.center.specialty} />
      <ContactInfo contact={props.center.contact} />
    </div>
  )
}

export default Main
