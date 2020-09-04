import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Router from "./Router";
import AOS  from 'aos'
//import * as serviceWorker from './serviceWorker';
class App extends React.Component {
  componentDidMount = () => {
    AOS.init({
      duration: 500
    });
  };
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
