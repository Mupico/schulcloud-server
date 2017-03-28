'use strict';

// model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
A content block should be defined like the following:
{
	type: 'text', 	// required so we can choose appropriate rendering
	title: '', 		// because type text
	content: '',	// because type text
	...
}
 */

const lessonSchema = new Schema({
	name: { type: String },
	description: { type: String },
	date: { type: Date, required: true },
	time: { type: Date, required: true },
	contents: [{}],
	courseId: {type: Schema.Types.ObjectId, required: true, ref: 'course'}
},{
	timestamps: true
});

const lessonModel = mongoose.model('lesson', lessonSchema);

module.exports = lessonModel;
