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

render(){
        return (
			<div className="header">
					<div className="headerLeft">
						<img src="Image/tm-logo.png" className="logo"></img>
					</div>
			    	<div className="headerRight">
			    		<div className="headerTab" id="headerHome">{this.state.home}</div>
			    		<div className="headerTab" id="headerEQUOT">{this.state.equo}</div>
			    		<div className="headerTab" id="headerEAPP">{this.state.eapp}</div>
			    		<div className="headerTab" id="headerLAN" onClick={this.languagechange.bind(this)}>{this.state.language}</div>
			    	</div>
			</div>
        )
    }
}
export default Nav