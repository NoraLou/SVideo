const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
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
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm: searchTerm })
  },
  render () {
    return (
      <div className='container'>
        <Header 
          handleSearchTermChange = {this.handleSearchTermChange} 
          searchTerm={this.state.searchTerm} 
          showSearch={true}/>
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
