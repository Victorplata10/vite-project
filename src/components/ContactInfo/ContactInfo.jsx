import './contactInfo.css'

const contactInfo = (props) => {
  return (
    <div>
    <h4 className='phone'>{props.contact.phone}</h4>
    <h4 className='location'>{props.contact.location}</h4>
    </div>
  )

}

export default contactInfo