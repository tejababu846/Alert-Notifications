import React from 'react'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  const [isVisible, setIsVisible] = React.useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  return isVisible ? (
    <div className="notification">
      <div className="notification-content">{children}</div>
      <GrFormClose className="close-icon" onClick={handleClose} />
    </div>
  ) : null
}

export default Notification
