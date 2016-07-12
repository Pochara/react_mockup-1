import React,{ Component } from 'react'

class eq extends Component{

	render(){
		return(
			<div className="EQ" >
		    	<div className="EQTOP">
		    		<img src="Image/tm-logo.png" className="eqlogo"/>
		    		<hr className="line"></hr>
		    	</div>
		    	<div className="aligncenter">
		    		<button className="EQbtn1">สร้างใบเสนอขาย</button>
		    		<div className="EQSearch">
						<i className="fa fa-search iconsearch"></i>
		    			<input className="input" type="text" placeholder="ค้นหาใบคำขอฯ,ชื่อผู้ขอเอาประกัน,สถานะ,เลขที่ใบคำขอเอาประกันภัย"></input>
						
						<i className="fa fa-calendar calendar"></i>
		    			<input className="input2" type="text" placeholder="ค้นหาจากเวลา"></input>
		    		</div>
		    		<button className="EQbtn2">
						<i className="fa fa-sort-amount-desc"></i>
						จัดเรียง
					</button>
		    	</div>
		  	</div>
		);
	}
}
export default eq