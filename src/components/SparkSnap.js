import React from "react";
import CreateSparkSnap from "./CreateSparkSnap";
import axios from "axios";

class SparkSnap extends React.Component {

  render() {
    let sparksnaps='';
    axios
      .get(
        `https://ldh3dt5zb6.execute-api.us-east-1.amazonaws.com/prod/sparksnap?limit=50`,
        {headers:{"x-api-key":'XHHMfbwTtz5LBTv4AR9hY60NdcySjcuC2GUeNBwE'}}
      )
      .then((response) => {
        sparksnaps = response.data;
      })
      .catch((error) => {
        console.log("get sparksnaps error");
      });
    let sparksnapItems;
    let noSparkSnaps;

    if (sparksnaps.length > 0) {
      sparksnapItems = sparksnaps.map((image) => {
        let url = image.src;
        let filename = image.filename;
        return (
          <div>
            <img src={url} alt={filename} />
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
      <div className="sparksnap-container">
        <CreateSparkSnap />
        <div className="sparksnap-grid">
          {sparksnapItems}
          {noSparkSnaps}
        </div>
      </div>
    );
  }
}

export default SparkSnap;
