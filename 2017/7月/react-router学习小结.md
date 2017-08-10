<!-- 2017/7/20  -->

# react-router 学习小结

## 一、使用

---

```shell
yarn add react-router
```

```js
import React from 'react'
import { Router, Route, Link } from 'react-router'

const App = React.createClass({/*...*/})
const About = React.createClass({/*...*/})
// 等等。

const Users = React.createClass({
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const User = React.createClass({
  componentDidMount() {
    this.setState({
      user: findUserById(this.props.params.userId)
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
      </div>
    )
  }
})

// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.body)
```

## 二、参考文档

---

- [React Router中文文档](https://react-guide.github.io/react-router-cn/)
