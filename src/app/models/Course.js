const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxLength: 255 },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

Course.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isvalidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isvalidType ? req.query.type : 'desc'
        });
    }
    return this;
}

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
});
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);