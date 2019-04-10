import React from 'react'
import Colors from './Colors'

const Cycle = (props) => {

    const { key, name, category, image, price, colors, inStock } = props.cycle
    const img = require('../../res/images/'.concat(image))

    return(
        <div className="col s6 m4">
            <div className="card z-depth-1 CycleInfo">
                <div className="card-content">
                    <img src ={ img } alt='Cycle' className="CycleImage" />
                    <div className="category">{ category }</div> 
                    <br />
                    <div className="name">{ name }</div>
                </div>
                <div className="card-action">
                    <div className="price">Price: { price }</div>
                    <Colors colors={ colors } />
                    <div className="instock">In Stock: {inStock?'Yes':'No'}</div>
                    <div className="fullspec">
                        <div className="spec">FULL SPECS</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cycle;