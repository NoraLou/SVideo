const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTyes: {
    route: object
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <header className ='header'>
          <h1 className='brand'>videos yo</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange= {this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {this.props.route.shows
            .filter((s) => `${s.title} ${s.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((s) => (
           <ShowCard {...s} key={s.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
