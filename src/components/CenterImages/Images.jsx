import './Images.css'

const Images = (props) => {

  return (
      <div>
        <img src = {props.centers.image} alt = {props.centers.name}/>
        <p>{props.center.rating}</p>
      </div> )}
export default Images