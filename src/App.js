import React, { Component } from 'react';
import './App.css';

class Repository extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="col-md-3">
        <a href={`https://github.com/${this.props.full_name}`}>
          <img alt="" src={this.props.owner.avatar_url} height={200} width={200} />
          <p>{this.props.full_name}</p>
        </a>
        <small>{this.props.description}</small>
        <br/>
        <small>{this.props.stargazers_count} Star(s), {this.props.forks_count} fork(s) and {this.props.watchers_count} Watcher(s)</small>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    console.log("loading starred repositories")
    fetch("https://api.github.com/users/alkass/starred").then((res) => res.json()).then((json) => this.setState(json))
  }
  render() {
    return (
      <div className="container">
        <div className="row">
        {
          Object.keys(this.state).map((k, i) => <Repository key={i} {...this.state[k]} />)
        }
        </div>
      </div>
    );
  }
}

export default App;
