import React from 'react'

const Colors = (props) => {
    return(
        <div>
            <div className="colors">Colors:   
            {props.colors?props.colors.map(col => {
                return(
                    <div className="colorGrid" style={{backgroundColor:col}}></div>
                )
            }):" N/A"}
            </div>
        </div>
    )
}

export default Colors