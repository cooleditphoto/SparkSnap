import React from "react";
import Button from "@material-ui/core"
function uploadSparkSnap(){
    let canvas = document.getElementById("overlay-canvas");
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.

}
const Image = () => (
<Button variant="contained" color="primary" onClick = {uploadSparkSnap}>
  create!
</Button>);

export default Image;