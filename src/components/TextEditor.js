import React from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom';

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    // Change code below this line
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // Change code above this line
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  saveToLocalStorage() {
    alert(this.state.input);
    localStorage.setItem("sparkText", this.state.input);
    var pos = require("pos");
    var words = new pos.Lexer().lex(
     this.state.input
    );
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
    let searchTagsString = searchTags.toString();
alert("searchtags: "+searchTagsString);
    localStorage.setItem("search", searchTagsString);
  }
  render() {
    return (
      <div className="TextEditor">
        <select onChange="formatDoc('fontname',this[this.selectedIndex].value);this.selectedIndex=0;">
          <option className="heading" selected>
            - font -
          </option>
          <option>Arial</option>
          <option>Arial Black</option>
          <option>Courier New</option>
          <option>Times New Roman</option>
        </select>
        <select onChange="formatDoc('fontsize',this[this.selectedIndex].value);this.selectedIndex=0;">
          <option className="heading" selected>
            - size -
          </option>
          <option value="1">Very small</option>
          <option value="2">A bit small</option>
          <option value="3">Normal</option>
          <option value="4">Medium-large</option>
          <option value="5">Big</option>
          <option value="6">Very big</option>
          <option value="7">Maximum</option>
        </select>
        <select onChange="formatDoc('forecolor',this[this.selectedIndex].value);this.selectedIndex=0;">
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
       <Link to="/choosePhoto">
        <ArrowForwardIcon
          onClick={this.saveToLocalStorage.bind(this)}
        >
        </ArrowForwardIcon>
        </Link>
       
      </div>
    );
  }
}
