import React,{ Component } from 'react'

class Nav extends Component{
	constructor(){
        super();
        this.state={
        	language:'| EN',
        	home:'HOME',
        	equo:'E_QUOTATION',
        	eapp:'E_APPLICATION'
        };
    }

	languagechange(e){
	    if(this.state.language==="| EN"){
	     	this.setState({
	     		language:'| TH',
	     		home:'หน้าหลัก',
        		equo:'อ้างอิง',
        		eapp:'ใบคำร้อง'
	     	})
	    } 
	    if(this.state.language==="| TH"){
	     	this.setState({
	     		language:'| EN',
	        	home:'HOME',
	        	equo:'E_QUOTATION',
	        	eapp:'E_APPLICATION'
	     	})
	    } 
	}

	active(e){
		var home = document.getElementById('headerHome');
		var equo = document.getElementById('headerEQUOT');
		var eapp = document.getElementById('headerEAPP');
		if(e.target.id == "headerHome"){
			home.classList.add("highlight");
			equo.classList.remove("highlight");
			eapp.classList.remove("highlight");
		}else if(e.target.id == "headerEQUOT"){
			home.classList.remove("highlight");
			equo.classList.add("highlight");
			eapp.classList.remove("highlight");
		}else if(e.target.id == "headerEAPP"){
			home.classList.remove("highlight");
			equo.classList.remove("highlight");
			eapp.classList.add("highlight");
		}
	}

render(){
        return (
			<div className="header">
					<div className="headerLeft">
						<img src="Image/tm-logo.png" className="logo"></img>
					</div>
			    	<div className="headerRight">
			    		<div className="headerTab" id="headerHome" onClick={this.active.bind(this)}>{this.state.home}</div>
			    		<div className="headerTab highlight" id="headerEQUOT" onClick={this.active.bind(this)}>{this.state.equo}</div>
			    		<div className="headerTab" id="headerEAPP" onClick={this.active.bind(this)}>{this.state.eapp}</div>
			    		<div className="headerTab" id="headerLAN" onClick={this.languagechange.bind(this)}>{this.state.language}</div>
			    	</div>
			</div>
        )
    }
}
export default Nav