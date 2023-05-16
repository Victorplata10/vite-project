const contactInfo = (props) => {
  return (
    <div>
    <h4>{props.contact.phone}</h4>
    <h4>{props.contact.location}</h4>
    </div>
  )

}

export default contactInfo