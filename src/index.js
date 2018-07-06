import React from 'react'

class FacebookShare extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			link: props.link
		}
	}
	componentDidMount() {
		if (!this.state.link) {
			this.setState({
				link: document.location.href
			})
		}
	}
	componentDidUpdate(prevProps) {
		if (this.props.link !== prevProps.link) {
			this.setState({
				link: this.props.link
			})
		}
	}
	render() {
		return this.props.children(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(this.state.link)}`)
	}
}

export default FacebookShare
