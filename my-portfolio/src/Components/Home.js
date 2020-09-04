import React,{Component} from 'react';
import NavbarComp from './Navabar.js'
import {withRouter} from 'react-router-dom'

class LandingComp extends Component{
    render(){
        return(
            <>
            <NavbarComp/>
            <div>
                <h1>hi</h1>
            </div>
            </>    
        );
    }
}

export default withRouter(LandingComp);