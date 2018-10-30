//require original module not the mocked one
const moment = require.requireActual('moment');

//Snapshot always going to match because we force the moment to start at specific point in time if time not provided
export default (timestamp = 0) => {
	return moment(timestamp);
};

