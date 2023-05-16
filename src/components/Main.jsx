import Images from "./Images"
import Specialty from "./Specialty"
import ContactInfo from "./ContactInfo"

const Main = (props) => {
  return (
    <div>
      <h2>{props.center.name}</h2>
      {/* <Images images={props.center.image} /> */}
      <p> Rating: {props.center.rating}</p>
      <h4>
        {props.center.city}, {props.center.state}
      </h4>
      <Specialty specialty={props.center.specialty}/>
      <ContactInfo contact={props.center.contact} />
      {/* <ContactInfo contact={props.center.contact.location} /> */}
      

      </div> )}

export default Main

 