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
        let farm = image.farm;
        let server = image.server;
        let id = image.id;
        let secret = image.secret;
        let title = image.title;
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
        return (
          <div>
         
          <Image id={id} src={url} alt={title} />
       
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
