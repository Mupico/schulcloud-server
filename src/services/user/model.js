'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	roles: [{type: Schema.Types.ObjectId, ref: 'role'}],
	email: {type: String, required: true},

	schoolId: {type: Schema.Types.ObjectId, ref: 'school', required: true},

	firstName: {type: String, required: true},
	lastName: {type: String, required: true},

	preferences: {type: Object} // blackbox for frontend stuff like "cookies accepted"
},{
	timestamps: true
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
