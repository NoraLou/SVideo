const React = require('react')
const Header = require('./Header')
const { connector } = require('./Store')

class Details extends React.Component {
	assignShow ( id ) {
		// console.log('callin assignShow with this.props :', this.props)
		const showArray = this.props.shows.filter((show) => show.imdbID === id)
		return showArray[0]
	} 
	render () {
		const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
		return (
		<div className ='container'>
			<Header />
			<div className='video-info'>
				<h1 className='video-title'>{title}</h1>
				<h1 className='video-title'>({year})</h1>
				<img className='video-poster'src={`/public/img/posters/${poster}`}/>
				<p classNsme='video-description'>{description}</p>		
			</div>
			<div className='video-container'>
				<iframe src={`https:www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;`} frameBorder='0' allowFullScrreen></iframe>
			</div> 
		</div>
		)
	}
}

const { arrayOf, object } = React.PropTypes

Details.proptypes = {
	params : object,
	shows : arrayOf(object).isRequired
}

module.exports = connector(Details)
