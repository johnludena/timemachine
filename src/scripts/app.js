import React from 'react'
import ReactDOM from 'react-dom'	

const app = function() {

	var date = new Date()
	var year = 2016
	var forwardTimer
	var backwardTimer


	const AppView = React.createClass({
		
		getInitialState: function() {
			return {
				currentYear: year,
				forwardBg: '',
				backwardBg: ''
			}
		},

		_handleForward: function() {
			// var self = this

			forwardTimer = setInterval(() => {

				console.log('current year...', this.state.currentYear)

				this.setState({
					currentYear: this.state.currentYear + 1,
					forwardBg: 'green'
				})
			}, 500)
		},

		_handleStop: function() {
			console.log('handleStop invoked...')
			clearInterval(forwardTimer)
			clearInterval(backwardTimer)
			this.setState({
				forwardBg: '#5854ce',
				backwardBg: '#5854ce'
			})
		},

		_handleBackward: function() {
			
			backwardTimer = setInterval(() => {

				console.log('current year...', this.state.currentYear)

				this.setState({
					currentYear: this.state.currentYear - 1,
					backwardBg: 'green' 
				})
			}, 500)
		},


		render: function() {

			var forwardButton = {
				background: this.state.forwardBg
			}

			var backwardButton = {
				background: this.state.backwardBg
			}
			
			return (
				<div className="tm-container">
					<div className="year">{this.state.currentYear}</div>
					<div className="buttons">
						<button style={forwardButton} onClick={this._handleForward}>forward</button>
						<button style={backwardButton} className="backward" onClick={this._handleBackward}>backward</button>
						<button className="stop" onClick={this._handleStop}>stop</button>
					</div>
					
				</div>
			)
		}

		
	})

	ReactDOM.render(<AppView />,document.querySelector('.container'))
}

app()