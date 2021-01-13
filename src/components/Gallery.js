import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import FloatPreview from "./FloatPreview";

import UploadPhotoPopup from "./UploadPhotoPopup";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
    this.togglePopup = this.togglePopup.bind(this);

    this.state = {
      showPreview: false,
      url:""
    };
    this.togglePreview = this.togglePreview.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  togglePreview(imgUrl) {
    this.setState({
      url:imgUrl
    });
  }

  render() {
    const results = this.props.data;
    let images;
    let noImages;
    // map variables to each item in fetched image array and return image component
    if (results.length > 0) {
      images = results.map((image) => {
        let id = image.PhotoId;
        let url = image.src;
        return (
          <div>
          <Image id={id} src={url} />
          </div>
        );
      });
    } else {
      noImages = <NoImages />; // return 'not found' component if no images fetched
    }

    return (
      <div>
        <ul className="photo-grid">
          <div><li> <AddPhotoAlternateIcon onClick={this.togglePopup.bind(this)} /></li></div>
          {images}</ul>
        {noImages}
        <div>
          {this.state.showPopup ? (
            <UploadPhotoPopup closePopup={this.togglePopup.bind(this)} />
          ) : null}
        </div>
    
      </div>
    );
  }
}
