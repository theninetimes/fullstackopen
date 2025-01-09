/* eslint-disable react/prop-types */
const Notification = ({ style, message }) => {
  if (!message) {
    return null
  }
  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification;