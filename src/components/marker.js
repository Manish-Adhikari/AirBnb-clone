import React from "react";
import './marker.css';

class Marker extends React.Component {
    render() {
        let classes="marker";
        if(this.props.selected) {
            classes +=" selected";   
            console.log(classes);     
        }
        return(
            <div className={classes}>
                {this.props.text}&euro;
            </div>
        );
    }
}

export default Marker;