const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object, string } = React.PropTypes
const { connector } = require('./Store')

const Search = React.createClass({
  propTyes: {
    route: object,
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch={true}/>
        <div className='shows'>
          {this.props.route.shows
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
