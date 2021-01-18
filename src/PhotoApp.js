import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import TextEditor from "./components/TextEditor";
import RecommendedPhotos from "./components/RecommendedPhotos";
import SearchForm from "./components/SearchForm";
import Footer from "./components/Footer";
import SparkSnap from "./components/SparkSnap";
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
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                   <SparkSnap/>
                  </div>
                )}
              />
              <Route
                path="/search/:searchInput"
                render={(props) => (
                  <div>
                    <SearchForm
                      handleSubmit={this.handleSubmit}
                      history={props.history}
                    />
                    <Search searchTerm={props.match.params.searchInput} /></div>
                )}
              />
              <Route path="/create" component={TextEditor} />
              <Route
                path="/choosePhoto"
                render={(props) => (
                  <div>
                    <SearchForm
                      handleSubmit={this.handleSubmit}
                      history={props.history}
                    />
                    <RecommendedPhotos />
                  </div>
                )}
              />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default PhotoApp;
