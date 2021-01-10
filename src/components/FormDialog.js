import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Form from "react-bootstrap/Form";
import bsCustomFileInput from 'bs-custom-file-input'

export default class UploadPhotoPopup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    open:false,
    setOpen:false
   };
   // Change code below this line
   this.handleClickOpen= this.handleClickOpen.bind(this);
   this.handleClose = this.handleClose.bind(this);
  }
 componentDidMount(){
   bsCustomFileInput.init();
 }

 handleClickOpen(){
   this.setState({ setOpen :true });
 };

 handleClose(){
   this.setState({ setOpen :false });
 };
   render(){return (
     <div className = "popup">
     <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
       Open form dialog
     </Button>
     <Dialog
       open={this.state.open}
       onClose={this.handleClose}
       aria-labelledby="form-dialog-title"
     >
       <DialogTitle id="form-dialog-title">Upload</DialogTitle>
       <DialogContent>
         <Form>
           <Form.File id="custom-file" label="Custom file input" custom />
         </Form>
       </DialogContent>
       <DialogActions>
         <Button onClick={this.handleClose} color="primary">
           Cancel
         </Button>
         <Button onClick={this.handleClose} color="primary">
           Subscribe
         </Button>
       </DialogActions>
     </Dialog>
   </div>
 
   );
 };
}
 
