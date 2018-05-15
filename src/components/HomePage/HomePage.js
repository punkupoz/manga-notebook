import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

import './HomePage.css';

class HomePage extends Component {
	simpleClick = () => {
		this.props.simpleClickAction();
	}
	simpleRequest = () => {
		this.props.simpleRequestAction();
	}
	componentWillMount() {
		this.props.simpleLoadAction();
	}
	render() {
		const { actionState } = this.props;
		console.log(actionState)
		
		if(actionState.loading) return <div className="page-load">Loading...</div>
		return (
			<div className="HomePage">				
				<div className="grid-container simple-showcase">
					<div className="header"><h1>App is loaded</h1></div>
					<div className="menu">
						<button className="simple-button" 
							onClick={this.simpleClick.bind(this)}
						>Simple Click</button>
						<button className="simple-request-button"
							onClick={this.simpleRequest.bind(this)}
							>Simple Request</button>
					</div>
					<div className="main-content">
						<div className={actionState.isClicked ? "simple-message" : "simple-message hide"}>
							<h2>You clicked !!!</h2>
						</div>
						<div className="simple-request-message">
							{actionState.users ? actionState.users.data.map(user => {
								return (
									<div key={user.id} className="User">
										<div className="user-name">
											<span> First Name: {user.first_name}</span>
											<span> Last Name: {user.last_name}</span>
										</div>
									</div>
								)
							}) : null}
						</div>
					</div>  
					<div className="footer">template for react, redux, sass projects</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { actionState: state.reducers.actions }
}

export default connect(mapStateToProps, actions)(HomePage);