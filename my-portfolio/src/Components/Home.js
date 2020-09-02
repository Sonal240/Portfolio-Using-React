import React,{Component} from 'react';
import NavbarComp from './Navabar.js'

class LandingComp extends Component{
    render(){
        return(
            <>
            <NavbarComp/>
            <div>
                <h1>Hi</h1>
            </div>
            </>    
        );
    }
}

export default LandingComp;