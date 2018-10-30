import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => (
	<div>404 - <Link to="/">Go home</Link></div> // using client side routing instead of server side that is causing full page refresh.Useful when linking internally
	);


export default NotFoundPage;