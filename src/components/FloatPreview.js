import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./Style.scss";
export default class FloatPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.canvas = React.createRef();
    this.downloadLink = React.createRef();
    this.saveImage = this.saveImage.bind(this);
  }

  componentDidMount() {
    const ctx = this.canvas.current.getContext("2d");
    let img = new Image();
    img.onload = function () {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 450, 650);
      ctx.drawImage(img, 25, 25, 400, 400);
      ctx.font = "25px Courier";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "white";

      let inputtext = localStorage.getItem("sparkText");
      console.log("text:" + inputtext);
      ctx.fillText(inputtext, 100, 450);
    };

    img.src = this.props.src;
    img.crossOrigin = "anonymous";
  }

  openFloatCart = () => {
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

  saveImage = () => {
    let image = this.canvas.current
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log("save image: " + image);
    this.downloadLink.current.href = image;
  };

  render() {
    let classes = ["float-cart"];

    if (!!this.state.isOpen) {
      classes.push("float-cart--open");
    }

    return (
      <div className={classes.join(" ")}>
        {/* If cart open, show close (x) button */}
        {this.state.isOpen && (
          <div
            onClick={() => this.closeFloatCart()}
            className="float-cart__close-btn"
          >
            X
          </div>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="header-title">Preview</span>
          </div>

          <div className="float-cart__shelf-container">
            <canvas
              className="canvas"
              ref={this.canvas}
              width={450}
              height={650}
            />
          </div>

          <div className="float-cart__footer">
            <div className="buy-btn">
              <a
                id="download"
                download="qiumuzitest.png"
                ref={this.downloadLink}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.saveImage}
                >
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
