import Images from '../ImageInfo/Images'
import Specialty from '../Specialty/Specialty'
import ContactInfo from '../ContactInfo/ContactInfo'
import './Main.css'

const Main = (props) => {
  return (
    <div className='layout'>
      <h2>{props.center.name}</h2>
      <Images image={props.center.image} />
      <p> Rating: {props.center.rating} </p>
      <h4>
        {props.center.city}, {props.center.state}
      </h4>
      <Specialty specialty={props.center.specialty} />
      <ContactInfo contact={props.center.contact} />
    </div>
  )
}

export default Main
