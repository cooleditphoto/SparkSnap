import React from "react";
import CreateSparkSnap from "./CreateSparkSnap";
import SparkSnapGallery from "./SparkSnapGallery";
import Loader from "./Loader";
import axios from "axios";

class SparkSnap extends React.Component{

  state = {
    SparkSnaps: [],
    loading:true
  }

  componentDidMount() {
    axios
    .get(
      `https://ldh3dt5zb6.execute-api.us-east-1.amazonaws.com/prod/sparksnap`,
      { headers: { "x-api-key": "XHHMfbwTtz5LBTv4AR9hY60NdcySjcuC2GUeNBwE" } }
    )
    .then((response) => {
      this.setState(
        { loading:false,
        SparkSnaps:response.data }
      );
    })
    .catch((error) => {
      console.log("get sparksnaps error", error);
    });
  }

  render(){
    return (
    <div className="photo-container">
      <CreateSparkSnap />
      {this.state.loading ? <Loader /> : <SparkSnapGallery data={this.state.SparkSnaps} />}
    </div>
  );
  }
}

export default SparkSnap;
