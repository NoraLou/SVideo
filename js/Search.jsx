const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object, string, arrayOf } = React.PropTypes
const { connector } = require('./Store')

const Search = React.createClass({
  propTyes: {
    shows: arrayOf(object),
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch={true}/>
        <div className='shows'>
          {this.props.shows
            .filter((s) => `${s.title} ${s.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((s) => (
           <ShowCard {...s} key={s.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
