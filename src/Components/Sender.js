import React, { Component } from 'react'
import { connect } from 'react-redux';
import updateMessage from '../store/actions/generalActions'

class Sender extends Component {

  state = {
    message:this.props.message 
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateMessage(this.state.message)
  }

  render() {

    return (
      <div className="component-border">
        <form onSubmit={this.handleSubmit}>
          <h3>Sender</h3>
          <input type="text" id="message" onChange={this.handleChange} value={this.state.message} />
          <input type="submit" value="submit"/>
        </form>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (message) => dispatch(updateMessage(message)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sender)