import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import EQ from './eq';
import Modal from './modal';
import Footer from'./footer';
require("../css/2560.css");
require("../css/less1024.css");

class App extends React.Component{
    render(){
        //Call Form Component
        return (
            <div>
            	<Nav/>
            	<EQ/>
            	<div className="divshowbtn">
	            		<Modal/>
	            </div>
            	<div className="testscroll"/>
            	<Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));