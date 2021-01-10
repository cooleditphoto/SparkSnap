import React, { useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";

function Preview (src, close) {
  const canvas= React.useRef(null);

  const downloadLink = useRef();
  useEffect(() => {

    const ctx = canvas.current.getContext("2d");
    const img = new Image();

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "40px Courier";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.color = "black";
      let inputtext = localStorage.getItem("sparkText");
      console.log("text:"+ inputtext);
      ctx.fillText(inputtext, 210, 75);
    };
    img.src = src;
  });

  function saveImage() {
    let image = this.canvas.toDataURL("image/jpeg");
    this.downloadLink.href = image;
  }

 
    return (
      <div>
        
        <canvas ref={canvas} width={640} height={425} />
        <a id="download" href="" ref={downloadLink}>
          <Button variant="contained" color="primary" onClick={saveImage}>
            Download
          </Button>
        </a>
      </div>
    );
  
}
export default Preview;
