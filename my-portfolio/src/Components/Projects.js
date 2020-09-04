import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'


class MyPro extends Component{
    render(){
        return(
            <div>
                <h1>Ahoy</h1>
            </div>
        );
    }
}

export default withRouter(MyPro);