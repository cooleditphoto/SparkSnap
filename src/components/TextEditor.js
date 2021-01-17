import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Button";
import Button from "@material-ui/core/Button";

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      warning: false,
    };
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeTextColor = this.changeTextColor.bind(this);
    this.changeFont = this.changeFont.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
    this.setState({ warning: false });
    let inputtextLines = this.state.input.split(/\n/g);
    let i = 0;
    for (i = 0; i < inputtextLines.length; i++) {
      if (inputtextLines[i].length > 28) {
        this.setState({ warning: true });
        return;
      }
    }
  }
  saveToLocalStorage() {
    localStorage.setItem("sparkText", this.state.input);
    var pos = require("pos");
    var words = new pos.Lexer().lex(this.state.input);
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);
    let searchTags = [];

    for (const i in taggedWords) {
      var taggedWord = taggedWords[i];
      var word = taggedWord[0];
      var tag = taggedWord[1];
      if (tag === "NN" || tag === "NNS" || tag === "JJ") {
        searchTags.push(word);
      }
    }
    if (searchTags.length === 0) {
      searchTags.push("background");
    }
    let searchTagsString = searchTags.toString();
    localStorage.setItem("search", searchTagsString);
  }

  changeFont() {}

  changeTextColor() {}

  render() {
    let button;
    if (this.state.warning) {
      button = (
        <Alert key={4} variant="warning">
          Please modify your input! the word count per line exceeds the maximum.
        </Alert>
      );
    } else {
      button = (
        <Link to="/choosePhoto">
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            onClick={this.saveToLocalStorage.bind(this)}
          >
            Next
          </Button>
        </Link>
      );
    }
    return (
      <div className="TextEditor">
        <div>
          <Alert key={0} variant="primary">
            Please don't exceed 10 lines, the lines ouside 10 will be ignored
          </Alert>
        </div>
        <select onChange={this.changeFont.bind(this)}>
          <option className="heading" selected>
            - font -
          </option>
          <option>Arial</option>
          <option>Arial Black</option>
          <option>Courier New</option>
          <option>Times New Roman</option>
        </select>
        <select onChange={this.changeTextColor.bind(this)}>
          <option className="heading" selected>
            - color -
          </option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </select>
        <textarea
          className="spark"
          id="spark-text"
          onChange={this.handleChange.bind(this)}
        ></textarea>

        {button}
      </div>
    );
  }
}
