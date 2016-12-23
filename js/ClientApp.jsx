const React = require('react')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const {store} = require('./Store')
const { Provider } = require('react-redux')
const { Router, Route, IndexRoute, browserHistory } = require('react-router')

const myRoutes = () => (
	<Route path= '/' component={Layout}>
	  <IndexRoute component={Landing} />
	  <Route path='/search' component={Search} />
	  <Route path='/details/:id' component={Details}/>
	</Route>
)

const App = React.createClass ({
	render () {
		return (
			<Provider store={store}>
			  <Router history={browserHistory}>
			  	{ myRoutes() }
			  </Router>
			</Provider>
		)
	}
})

//export routes so they can be rendered on the server
App.Routes = myRoutes

module.exports = App

//we export this rendering to BrowserEntry.jsx to take advantage of Universal/server-side rendering 
//ReactDOM.render(<App />, document.getElementById('app'))
