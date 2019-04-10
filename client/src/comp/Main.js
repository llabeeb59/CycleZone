import React, { Component } from 'react';
import Cycle from './cycle/Cycle';
const CycleList = require('../res/cycleList.json')


class Main extends Component {
    
    render() {
        return(
            <div className="row container">
                {
                    CycleList.map(obj => { return(<Cycle cycle={ obj } />)})
                }
                
            </div>
        )
    }
}

export default Main;
