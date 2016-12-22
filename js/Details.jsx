const React = require('react')
const Header = require('./Header')

class Details extends React.Component {
	render () {
		const params = this.props.params || {}
		const { title, description, year, poster, trailer } = params
		return (
		<div className ='container'>
			<Header />
			<div className='video-info'>
				<h1 className='video-title'>{title}</h1>
				<h1 className='video-title'>({year})</h1>
				<img className='video-poster'src={`public/img/posters/${poster}`}/>
				<p classNsme='video-description'>{description}</p>		
			</div>
			<div className='video-container'>
				<iframe src={`https:www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;`} frameBorder='0' allowFullScrreen></iframe>
			</div> 
		</div>
		)
	}
}

const { object } = React.PropTypes

Details.proptypes = {
	params : object.isRequired
}

module.exports = Details