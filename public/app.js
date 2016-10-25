import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink} from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='kevin' component={Kevin} >
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='about' component={About} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Home = () => <h1>Hello World!</h1>
const Kevin = (props) => (
  <div>
  <br />
    <Link activeStyle={{color:'#53acff'}} to='/kevin'>Twitter Feed</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/kevin/instagram'>Instagram Feed</Link>
    <h1>I'ma catch 'em all!</h1>
    {props.children}
  </div>
)
const About = () => <h3>Welcome to the About Page</h3>

const Nav = () => (
  <div>
    <IndexLink activeStyle={{color:'#53acff'}} to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeStyle={{color:'#53acff'}} to='/kevin'>Kevin</IndexLink>&nbsp;
    <IndexLink activeStyle={{color:'#53acff'}} to='/about'>About</IndexLink>
  </div>
)
const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
const NotFound = () => (
  <h1>404.. This page is not found!</h1>
)
export default App
