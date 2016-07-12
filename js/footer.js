import React,{ Component } from 'react'

class footer extends Component{
    render(){
        return(
            <div className="footer">
                	<div className="footerLeft">2016 Tokiomarine Insurance Group. All rigths reserved.</div>
                	<div className="footerCenter">
                		<img src="Image/Tokio_Marine_logo.png" className="logobottom"/>
                	</div>
                	<div className="footerRight">
                		<i className="fa fa-facebook-square iconright"></i>
            			<i className="fa fa-twitter iconright"></i>
            			<i className="fa fa-google-plus iconright"></i>
                	</div>
            </div>
            );
    }
}
export default footer