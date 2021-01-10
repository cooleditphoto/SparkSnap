import React from "react";
import bsCustomFileInput from 'bs-custom-file-input'

 export default class UploadPhotoPopup extends React.Component{
   constructor(props){
     super(props);
     this.state = {
     open:false,
     setOpen:false
    };
  
   }
  componentDidMount(){
    bsCustomFileInput.init();
  }

    render(){
      return (
      <div className='popup'>  
<div className='popup\_inner'>  
<h1>upload photo</h1>  
<input id="inputGroupFile01" type="file" className="custom-file-input"></input>
              <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
<button onClick={this.props.closePopup}>close me</button>  
</div>  
</div>  
         
  
    );
  };
}
  
