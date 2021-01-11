import React, { Component } from "react";
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

import "./Blog.css";

class Blog extends Component {
  state = {
    auth: false,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="MyActive"
                  activeStyle={{ color: "green" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Redirect from="/23" to="/new-post" />
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          {/* <Route path="/:id" component={FullPost} /> */}
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
