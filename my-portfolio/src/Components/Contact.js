import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'

class ContactMe extends Component{
    render(){
        return(
            <div>
                <h1>Namaste</h1>
            </div>
        );
    }
}

export default withRouter(ContactMe);