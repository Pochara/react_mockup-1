import React,{ Component } from 'react';
import { Modal } from 'react-bootstrap';

class Infopage1 extends Component{
	constructor(props) {
	    super(props);
	   	this.state={
	   		title:"",
			name:"",
			lastname:"",
			paper:"",
			id:"",
			otherpaper:"",
			status:"",
			weight:"",
			height:""
	   	}
	 }
	componentDidMount() {
		if(this.props.information === "1"){
		  	this.setState({
					title:"นางสาว",
					name:"อาทิมา",
					lastname:"อิทธิโรจนกุล",
					paper:"บัตรประชาชน",
					id:"9-999-999999x-xx-x",
					otherpaper:"-",
					status:"แต่งงานแล้ว",
					weight:"80 กิโลกรัม",
					height:"160 เซ็นติเมตร"
				})
			}else{
				this.setState({
		   		title:"นาย",
				name:"สมศักดิ์",
				lastname:"สวนสวัสดิ์",
				paper:"บัตรประชาชน",
				id:"9-999-999999x-xx-x",
				otherpaper:"-",
				status:"โสด",
				weight:"65 กิโลกรัม",
				height:"175 เซ็นติเมตร"
		   		})
			} 	
		
	}
	
	render(){
		return(
			<div id = "showpage1" className="information">
				 		<table className="width100">
							  <tr className="border_bottom">
							    <td className="page1M"><b>คำนำหน้า</b></td>
							    <td className="page1">{this.state.title}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>ชื่อ</b></td>
							    <td className="page1">{this.state.name}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>นามสกุล</b></td>
							    <td className="page1">{this.state.lastname}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>เอกสารที่ใช้แสดง</b></td>
							    <td className="page1">{this.state.paper}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>เลขบัตรประชาชน</b></td>
							    <td className="page1">{this.state.id}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>เลขที่เอกสารแสดงตัวอื่นๆ</b></td>
							    <td className="page1">{this.state.otherpaper}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>สถานภาพ</b></td>
							    <td className="page1">{this.state.status}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>น้ำหนัก</b></td>
							    <td className="page1">{this.state.weight}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>ส่วนสูง</b></td>
							    <td className="page1">{this.state.height}</td>
							  </tr>
							</table>
				 	</div>
		)
	}
}

class Infopage2 extends Component{
	constructor(props) {
	    super(props);
	   	this.state={
	   		city:"",
			district:"",
			subdistrict:"",
			postal:"",
			telephone:"",
			mobile:"",
			email:""
	   	}
	 }

	componentDidMount() {
		if(this.props.information === "1"){
		  	this.setState({
					city:"กรุงเทพมหานคร",
					district:"ยานนาวา",
					subdistrict:"บางโพงพาง",
					postal:"10150",
					telephone:"02-xxx-xxxx",
					mobile:"081-xxx-xxxx",
					email:"jvomhyper@gmail.com"
				})
			}else{
				this.setState({
		   			city:"นครปฐม",
					district:"ห้วยแก้ว",
					subdistrict:"กำแพงเพชร",
					postal:"20150",
					telephone:"02-xxx-xxxx",
					mobile:"085-xxx-xxxx",
					email:"juneny55@gmail.com"
		   		})
			} 		
	}

	render(){
		return(
			<div id="showpage2" className="information">
				 		<table className="width100">
							  <tr className="border_bottom">
							    <td className="page1M"><b>จังหวัด</b></td>
							    <td className="page1">{this.state.city}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>เขต/อำเภอ</b></td>
							    <td className="page1">{this.state.district}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>แขวง/ตำบล</b></td>
							    <td className="page1">{this.state.subdistrict}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>รหัสไปรษณีย์</b></td>
							    <td className="page1">{this.state.postal}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>โทรศัพท์บ้าน</b></td>
							    <td className="page1">{this.state.telephone}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>โทรศัพท์มือถือ</b></td>
							    <td className="page1">{this.state.mobile}</td>
							  </tr>
							  <tr className="border_bottom">
							    <td className="page1M"><b>อีเมลล์</b></td>
							    <td className="page1">{this.state.email}</td>
							  </tr>
							</table>
				 	</div>
	        	
		)
	}	
}

class InfoTab2 extends Component{
	componentDidMount() {
		if(this.props.information === "1"){
		  	this.setState({
					title:"นางสาว",
					name:"อาทิมา",
					lastname:"อิทธิโรจนกุล",
					paper:"บัตรประชาชน",
					id:"9-999-999999x-xx-x",
					otherpaper:"-",
					status:"แต่งงานแล้ว",
					weight:"80 กิโลกรัม",
					height:"160 เซ็นติเมตร"
				})
			}else{
				this.setState({
		   		title:"นาย",
				name:"สมศักดิ์",
				lastname:"สวนสวัสดิ์",
				paper:"บัตรประชาชน",
				id:"9-999-999999x-xx-x",
				otherpaper:"-",
				status:"โสด",
				weight:"65 กิโลกรัม",
				height:"175 เซ็นติเมตร"
		   		})
			} 	
		
	}
	render(){
		return (
				<div>
				 		<table className="width100">
							  <tr className="border_bottom2">
							    <td className="pageM"><b>สัญญาหลัก</b> งวดชำระเบี้ย <div className="divinline"><b>รายปี</b></div></td>
							    <td className="page2">ทุนประกันภัย (บาท)</td>
							    <td className="page2">เบี้ยประกันภัย(บาท/งวด)</td>
							  </tr>
							  <tr className="Space">
							    <td className="pageMchild">EN-N กรมธรรม์ประกันภัยแบบโฮล ไลฟ์พลัส 20ปี</td>
							    <td className="page2">1,000,000</td>
							    <td className="page2">10,000</td>
							  </tr>
							  <tr className="Space">
							    <td className="pageMchild">PA23 ประกันภัยอุบัติเหตุส่วนบุลคล</td>
							    <td className="page2">5,000,000</td>
							    <td className="page2">2,200</td>
							  </tr>
							  <tr className="Space">
							    <td className="pageMchild">โซลูชั่น ดีไซน์</td>
							    <td className="page2">1,000,000</td>
							    <td className="page2">900,000</td>
							  </tr>
						</table>
						<div className="center width100">
							  	สัญญาเพิ่มเติม 
							  	<div className="morepromise">
							  	<hr className="morepromisehr"></hr> 
							  	</div> 	
						</div>
						<table className="width100">
							  <tr className="Space">
							    <td className="pageM">AI-N อุบัติเหตุคุ้มครอง ชีวิต อวัยวะ ทุพพลภาพ</td>
							    <td className="page2">250,000</td>
							    <td className="page2">2,000</td>
							  </tr>
							  <tr className="Space">
							    <td className="pageM">OPD2 ค่ารักษาพยาบาลแบบผู้ป่วยนอก OPD</td>
							    <td className="page2">300,000</td>
							    <td className="page2">3,000</td>
							  </tr>
							  <tr className="Space">
							    <td className="pageM">WP-B ยกเว้นเบี้ยประกันภัยหลัก</td>
							    <td className="page2">1,000,000</td>
							    <td className="page2">0</td>
							  </tr>
							  
							  <tr className="Space">
							    <td className="pageM"><b>รวมเบี้ยประกันสัญญาเพิ่ม</b></td>
							    <td className="page2"></td>
							    <td className="page2"><b>15,200</b></td>
							  </tr>
						</table>
						<div className = "total">เบี้ยประกันรวมทั้งหมด
							<div className = "totalsum"><b>935,200</b>บาท</div>
						</div>
		  		</div>
			
		)
	}
}
class modal extends Component{

	 constructor(props) {
	    super(props);
	   	this.state={
	   		showModal : false,
	   		option : "1"
	   	}
	  }
 
	close() {
	    this.setState({ showModal: false });
	}

	open1() {
	    this.setState({ showModal: true,
	    				option:"1" });
	}
	open2(){
		this.setState({ showModal: true,
	    				option:"2" });
	}

	selectpage(e){
		var page1 = document.getElementById('page1');
		var page2 = document.getElementById('page2');
		var showpage1 = document.getElementById('showpage1');
		var showpage2 = document.getElementById('showpage2');
		if(e.target.value=="page1"){
				page1.classList.add("active2");
				page2.classList.remove("active2");
				showpage1.style.display="block";
				showpage2.style.display="none";

		}else{
				page1.classList.remove("active2");
				page2.classList.add("active2");
				showpage1.style.display="none";
				showpage2.style.display="block";
		}
	}

	selecttab(e){
		var information1 = document.getElementById('information1');
		var information2 = document.getElementById('information2');
		var tab1 = document.getElementById('tab1');
		var tab2 = document.getElementById('tab2');
		var tabimgA1 = document.getElementById('tabimgA1');
		var tabimgA2 = document.getElementById('tabimgA2');
		var tabimgB1 = document.getElementById('tabimgB1');
		var tabimgB2 = document.getElementById('tabimgB2');

		if(e.target.value == "tab1"){
			tabimgA1.classList.remove("none");
			tabimgA2.classList.add("none");
			tabimgB1.classList.remove("none");
			tabimgB2.classList.add("none");
			tab2.classList.add("active");
			tab1.classList.remove("active");
			information1.style.display="block";
			information2.style.display="none";
		}else{
			tabimgA1.classList.add("none");
			tabimgA2.classList.remove("none");
			tabimgB1.classList.add("none");
			tabimgB2.classList.remove("none");
			tab1.classList.add("active");
			tab2.classList.remove("active");
			information1.style.display="none";
			information2.style.display="block";
		}
	}
	

	render(){
		
		return(

		<div>
		<button className="showbtn" onClick={this.open1.bind(this)}>showModal1</button>
		<button className="showbtn" onClick={this.open2.bind(this)}>showModal2</button>
			 <Modal bsSize="large" show={this.state.showModal} onHide={this.close.bind(this)}>
			 <div >
	          <Modal.Header>
	            <div className ="parent">
		    	<div value="tab1" className="tab" id="tab1" onClick={this.selecttab.bind(this)}>
		    		<a value="tab1">
		    		<img value="tab1" id="tabimgA1" src="Image/user2.png" className="imagetab"/>
		    		<img value="tab1" id="tabimgA2" src="Image/user1.png" className="imagetab none"/>
		    		ข้อมูลผู้เอาประกันภัย
		    		</a>
		    	</div>
		    	<div value="tab2" className="tab active" id="tab2" onClick={this.selecttab.bind(this)}>
		    		<a value="tab2">
		    		<img value="tab2" id="tabimgB1" src="Image/umbrella1.png" className="imagetab"/>
		    		<img value="tab2" id="tabimgB2" src="Image/umbrella2.png" className="imagetab none"/>
		    		ข้อมูลแบบประกัน
		    		</a>
		    	</div>
		    </div>
		    		<div className="wrapper">
						<button className="btn" onClick={this.close.bind(this)}>ปิด</button>
					</div>
	          </Modal.Header>
	          <Modal.Body>

	          <div>
	          	<div id="information1" className="city">
				 	<div className="selecthead" >
				 		<div id="page1" className="select active2"><a value="page1" onClick={this.selectpage.bind(this)}>ประวัติส่วนตัว</a></div>
				 		<div id="page2" className="select"><a value="page2" onClick={this.selectpage.bind(this)}>สถานที่สะดวกในการติดต่อ</a></div>
				 	</div>
				 	<div id="showpage1"> <Infopage1 information={this.state.option}/> </div>
				 	<div id="showpage2" className="none"> <Infopage2 information={this.state.option}/> </div>
				</div>
					
				<div id="information2" className="city">
					<InfoTab2 information={this.state.option}/>
				</div>

			</div>
			
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
          	
          </div>

	    </Modal>

		</div>
		);
	}
}
export default modal