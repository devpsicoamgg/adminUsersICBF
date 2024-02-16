const { Router } = require("express");

const subRouterTeachers = Router();


const getTeachersRouter = require("./getTeachersRouter");
const postTeachersRouter = require("./postTeachersRouter");
const patchTeacherRouter = require("./ptchTeachersRouter");


subRouterTeachers.use(getTeachersRouter)
subRouterTeachers.use(postTeachersRouter)
subRouterTeachers.use(patchTeacherRouter)


module.exports = subRouterTeachers;