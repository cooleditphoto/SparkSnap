import React from "react";

class SparkSnapGallery extends React.Component {

  render() {
    let sparksnaps = this.props.data;
    let sparksnapItems;
    let noSparkSnaps;

    if (sparksnaps.length > 0) {
      sparksnapItems = sparksnaps.map((image) => {
        let url = image.src;
        let filename = image.filename;
        return (
          <div>
            <img className = 'SparkSnapItem'src={url} alt={filename} />
          </div>
        );
      });
    } else {
      noSparkSnaps = (
        <div>
          <h2>No SparkSnaps Found</h2>
        </div>
      );
    }
    return (
      <div className="sparksnap-grid">
        {sparksnapItems}
        {noSparkSnaps}
      </div>
    );
  }
}

export default SparkSnapGallery;
