import React from 'react'
import { connect } from 'react-redux';

const Receiver = (props) => {
  
  return (
    <div className="component-border">
      <h3>Receiver</h3>
      <div className="message-box">{props.message}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
}

export default connect(mapStateToProps)(Receiver)