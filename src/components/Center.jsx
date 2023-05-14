const Center (props) => {
  return (
    <div>
    <h2>{props.center.name}</h2>
    <h4>{props.center.city}{props.center.state}</h4>
    </div>
  )

}

export default Center