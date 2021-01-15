import React from "react";
import NoImages from "./NoImages";
import FloatPreview from "./FloatPreview";

import UploadPhotoPopup from "./UploadPhotoPopup";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
    this.togglePopup = this.togglePopup.bind(this);

    this.state = {
      imgUrl: "",
    };
    this.togglePreview = this.togglePreview.bind(this);
    this.singleImage = React.createRef();
    this.FloatPreview = React.createRef();
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  togglePreview(url) {
    this.setState({
      showPreview:!this.state.showPreview,
      imgUrl: url,
    });
   
  }

  render() {
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
            <li>
              <img
                onClick={this.togglePreview.bind(this,url)}
                id={id}
                src={url}
                alt={title}
              />
            </li>{" "}
          </div>
        );
      });
    } else {
      noImages = <NoImages />; // return 'not found' component if no images fetched
    }

    return (
      <div>
        <ul className="photo-grid">
          <div>
            <li>
              {" "}
              <AddPhotoAlternateIcon onClick={this.togglePopup.bind(this)} />
            </li>
          </div>
          {images}
        </ul>
        {noImages}
        <div>
          {this.state.showPopup ? (
            <UploadPhotoPopup closePopup={this.togglePopup.bind(this)} />
          ) : null}
        </div>
        <div className="preview">
          {this.state.showPreview ? (
            <FloatPreview
src = {this.state.imgUrl}            />
          ) : null}
        </div>
      </div>
    );
  }
}
