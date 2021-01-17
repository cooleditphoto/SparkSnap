import React from "react";
import NoImages from "./NoImages";
import UploadImageIcon from "../static/upload-image.png";
import Button from "@material-ui/core/Button";
import "./Style.scss";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: "",
      isPreviewOpen: false,
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
    this.singleImage = React.createRef();
    this.FloatPreview = React.createRef();
    this.canvas = React.createRef();
    this.downloadLink = React.createRef();
    this.saveImage = this.saveImage.bind(this);
  }

  changeCanvas(imgUrl) {
    const ctx = this.canvas.current.getContext("2d");
    let img = new Image();
    img.onload = function () {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 450, 800);
      ctx.drawImage(img, 25, 25, 400, 400);
      ctx.font = "24px Courier";
      ctx.textAlign = "start";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "white";
      let inputtext = localStorage.getItem("sparkText");
      let inputtextLines = inputtext.replace(/\n/g, "<br>\n").split("<br>\n");
      let start = 475;
      let i = 0;
      for (i = 0; i < Math.min(inputtextLines.length, 10); i++) {
        ctx.fillText(inputtextLines[i], 25, start);
        start = start + 25;
      }
    };

    img.src = imgUrl;
    img.crossOrigin = "anonymous";
  }

  closeFloatCart = () => {
    this.setState({ isPreviewOpen: false });
  };

  saveImage = () => {
    let image = this.canvas.current
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log("save image: " + image);
    this.downloadLink.current.href = image;
  };

  togglePreview(url) {
    if (this.state.isPreviewOpen) {
      this.changeCanvas(url);
    } else {
      this.setState({
        isPreviewOpen: true,
      });
      this.changeCanvas(url);
    }
  }

  handleUploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      if (this.state.isPreviewOpen) {
        this.changeCanvas(URL.createObjectURL(img));
      } else {
        this.setState({
          isPreviewOpen: true,
        });
        this.changeCanvas(URL.createObjectURL(img));
      }
    }
  }

  render() {
    let classes = ["float-cart"];

    if (!!this.state.isPreviewOpen) {
      classes.push("float-cart--open");
    }

    const results = this.props.data;
    let images;
    let noImages;
    // map variables to each item in fetched image array and return image component
    if (results.length > 0) {
      images = results.map((image) => {
        let id = image.id;
        let url = image.src.large;
        let title = url.split("/").pop();

        return (
          <div>
            <img
              onClick={this.togglePreview.bind(this, url)}
              id={id}
              src={url}
              alt={title}
            />
          </div>
        );
      });
    } else {
      noImages = <NoImages />; // return 'not found' component if no images fetched
    }

    return (
      <div>
        <div className="photo-grid">
          <div>
            <label for="upload_image">
              <img src={UploadImageIcon} alt={UploadImageIcon} />
            </label>
            <input
              id="upload_image"
              type="file"
              onChange={(e) => this.handleUploadImage(e)}
            />
          </div>
          {images}
        </div>
        {noImages}
        <div className="preview">
          <div className={classes.join(" ")}>
            {/* If cart open, show close (x) button */}
            {this.state.isPreviewOpen && (
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
                  height={775}
                />
              </div>

              <div className="float-cart__footer">
                <a
                  id="download"
                  download={this.state.imgUrl.split("/").pop()}
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
      </div>
    );
  }
}
