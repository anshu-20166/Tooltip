import React from 'react';
import Tooltip from './Tooltip';
class Main extends React.Component {
    constructor(){
            super();
            this.state={
                position:"bottom" //by default position is bottom
            }
        }
        //to select the position from dropdown
        click()
        {
           var val=document.getElementById("mySelect").value;
           this.setState({
               position:val
           })        
        }     
    render(){  
        return(
            <div id="main-container">
            <h2>select a position from here</h2>
            {/* DRopdown to select the position*/ }
            <select id="mySelect">
             <option value="bottom">Bottom</option>
             <option value="top">Top</option>
             <option value="left">Left</option>
             <option value="right">Right</option>
             </select>
            <button id="select-btn" onClick={this.click.bind(this)}>Choose</button>
            {/*tooltip with the position in state*/}
            <Tooltip position={this.state.position}/>
            </div>
        )
    }
    
}
export default Main;