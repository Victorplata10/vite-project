import './Centers.css'
import Image from '../CenterImages/Images'

const Center = (props) => {
  return (
    <div className='center'>
    <h2>{props.center.name}</h2>
    <h4>{props.center.city}{props.center.state}</h4>
    <div className='images'>{props.centers.images.map((image) => (
        <Image image={image} key={centers.image}/>
      ))}
      </div> 
    </div>
  )}

export default Center