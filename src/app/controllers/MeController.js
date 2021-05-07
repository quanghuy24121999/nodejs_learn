const Course = require('../models/Course');

class MeController {
    // [GET] /stored/courses
    storedCourses(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('me/stored-courses', { courses }))
            .catch(next)
    }

    // [GET] /trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({}).lean()
            .then(courses => res.render('me/trash-courses', { courses }))
            .catch(next)
    }
}

module.exports = new MeController;