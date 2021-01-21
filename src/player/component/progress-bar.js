import React from 'react';
import './progrees-bar.css'

function ProgreesBar(props){
    return(
        <div className="ProgressBar">
            <input 
            type="range"
            min={0}
            max={props.duration}
            defaultValue={props.value}
            onChange={props.handleProgressChange}
            />
        </div>
    )
}

export default ProgreesBar;