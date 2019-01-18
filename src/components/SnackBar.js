import React, { Component } from "react";

class SnackBar extends Component {
  constructor(props) {
    super(props);
  }
  close() {
    this.props.closeModal();
  }
  render() {
    return (
    <div className="notification active"  className={
      this.props.openModal ? "notification active" : "notification"
    }>
	    <div className="text">
		  {this.props.text}
	  </div>
  	<div className="close ripple" onClick={this.close.bind(this)}>
		  <div className="text">
			  Close
		  </div>
	    </div>
    </div>
    );
  }
}

export default SnackBar;
