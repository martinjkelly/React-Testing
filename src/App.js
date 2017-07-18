import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class App extends React.Component {
   render() {
      return (
	<main>
	    <NavBar />
	    <h1>Hello World</h1>
	</main>
      );
   }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
