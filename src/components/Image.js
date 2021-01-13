import React from "react";
import FloatPreview from "./FloatPreview";

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreview: false,
    };
    this.togglePreview = this.togglePreview.bind(this);
  }

  togglePreview() {
    this.setState({
      showPreview: !this.state.showPreview,
    });
  }

  render() {
    let url = this.props.src;
    let key = this.props.id;
    let title = url.split("/").pop()
    return (
      <div>
        <li>
          <img onClick={this.togglePreview.bind(this)} id={key} src={url} alt={title} crossOrigin={"*"}/>
        </li>
        <div className = "preview">
          {this.state.showPreview ? (
            <FloatPreview src= {url} open ={"true"} />
          ) : null}
        </div>
      </div>
    );
  }
}
