import React from 'react';
class Tooltip extends React.Component {
    render() {
        console.log("this.props",this.props);
      return(
        <div className="tooltip-container">
           <div className="hover-button">Hover over
             <span id="tooltip" className={this.props.position} >Tooltip text</span>{/*taking user input using props*/}
           </div>
        </div>
      ) 
    }
  }
export default Tooltip;