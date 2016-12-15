const logger = require('winston');
const promisify = require('es6-promisify');
const errors = require('feathers-errors');
const request = require('request-promise-native');

const AbstractLoginStrategy = require('./interface.js');

const acceptedCredentials = [
	{username: 'a', password: 'a', roles: ['administrator'], schoolId: '58515cbd593d430be5b89b9e'},
	{username: 'lehrer@schul-cloud.org', password: 'schulcloud', roles: ['teacher']},
	{username: 'schueler@schul-cloud.org', password: 'schulcloud', roles: ['student']}
];

class LocalLoginStrategy extends AbstractLoginStrategy {

	login({ username, password}, system) {
		let found = acceptedCredentials.findIndex((credentials) => {
				return credentials.username == username
					&& credentials.password == password;
			});
		if(found > -1) {
			return Promise.resolve(acceptedCredentials[found]);
		} else {
			return Promise.reject(new errors.NotAuthenticated('Wrong credentials'));
		}
	}
}

module.exports = LocalLoginStrategy;
