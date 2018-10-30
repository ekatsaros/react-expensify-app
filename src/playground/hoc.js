//High Order Component (HOC) - A component (HOC) that renders another component
//Pros of HOC
//Reuse Code
//Render Highjacking
//Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
	);

const withAdminWarning = (WrapperComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info please dont share</p>}
			<WrapperComponent {...props}/> 
		</div>
	);
}


// requireAuthentication
const requireAuthentication = (WrapperComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? (
				<WrapperComponent {...props}/>
				) : (
				<p>Please login to view the info</p>
				)}
		</div>
		);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));