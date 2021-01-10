import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import TextEditor from "./components/TextEditor";
import RecommendedPhotos from "./components/RecommendedPhotos";

class PhotoApp extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/sparksnap">
          <div className="container">
            <Route
              render={(props) => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mountain" />}
              />
              <Route
                path="/search/:searchInput"
                render={(props) => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route path="/create" component={TextEditor} />
              <Route path="/choosePhoto" component={RecommendedPhotos} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default PhotoApp;
