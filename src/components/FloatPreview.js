import React, { Component, createRef } from 'react';
import Button from "@material-ui/core/Button";
import { useCanvas } from './Canvas.js';
import "./Style.scss"
export default class FloatPreview extends Component {

  constructor(props){
      super(props);
      this.state = {
        isOpen: false
      };
     
    this.canvas = React.createRef();
    this.downloadLink = React.createRef();
    this.saveImage = this.saveImage.bind(this);

  }

  componentDidMount() {
    if(this.props.open === "true"){
      this.setState({ isOpen: true });
    }
    const ctx = this.canvas.current.getContext("2d");
    let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.font = "40px Courier";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";
    
    let inputtext = localStorage.getItem("sparkText");
    console.log("text:"+ inputtext);
    ctx.fillText(inputtext, 210, 75);
  };
  img.crossOrigin = "*";
  img.src = this.props.src;
  console.log("img.origin: "+img.crossOrigin);
  }

  openFloatCart = () => {
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

 saveImage= () =>{
    let image = this.canvas.current.toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
    console.log("save image: "+image)
    this.downloadLink.current.href = image;
  };

  render() {

  
      let classes = ['float-cart'];
  
      if (!!this.state.isOpen) {
        classes.push('float-cart--open');
      }
      
      return (
        
        <div className={classes.join(' ')}>
          {/* If cart open, show close (x) button */}
          {this.state.isOpen && (
            <div
              onClick={() => this.closeFloatCart()}
              className="float-cart__close-btn"
            >
              X
            </div>
          )}
  
          {/* If cart is closed, show bag with quantity of product and open cart action */}
          {!this.state.isOpen && (
            <span
              onClick={() => this.openFloatCart()}
              className="bag bag--float-cart-closed"
            >
              <span className="bag__quantity">{3}</span>
            </span>
          )}
  
          <div className="float-cart__content">
            <div className="float-cart__header">
              <span className="bag">
                <span className="bag__quantity">{3}</span>
              </span>
              <span className="header-title">Cart</span>
            </div>
  
            <div className="float-cart__shelf-container">
            <canvas 
        className="App-canvas"
        ref={this.canvas}
        width={450}
        height={450}
        />              
            </div>
  
            <div className="float-cart__footer">
              <div className="sub">SUBTOTAL</div>
              <div className="sub-price">
              
              </div>
              <div className="buy-btn">
              <a id="download" download="qiumuzitest.png" ref={this.downloadLink}>
          <Button variant="contained" color="primary" onClick={this.saveImage}>
            Download
          </Button>
        </a>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
