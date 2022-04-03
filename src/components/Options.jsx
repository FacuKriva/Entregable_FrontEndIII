import React from "react";

const Options = ( props ) => {
    
    if (props.counter === true) {
        return <div className="hidden"></div>
    }
    
    else {
        return <div className="options">
            <div className = "option" >
                
                <button className = "buttons" onClick = { props.clickHandler } value = "A" > 
                    { props.optionA } 
                </button>

            </div>
            <div className = "option" >
                
                <button className = "buttons" onClick = { props.clickHandler } value = "B" >
                    { props.optionB}
                </button>

            </div>
        </div>
        }
}

export default Options;