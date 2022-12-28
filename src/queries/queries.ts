import { prisma } from '../db';
//import { RowDataPacket } from "mysql2";
import { SQL_QUERIES } from '../SQL';

const prismaQueries = {
  getMyCourseSQL:(student:any)=>prisma.$queryRaw(SQL_QUERIES.getMyCourseSQL(student.student_id)),
  getMyCreateCourseSQL:(data:any)=>prisma.$queryRaw(SQL_QUERIES.getMyCreateCourseSQL(data.lecturer_id)),
  getCoursesSQL: (data:any)=>prisma.$queryRaw(SQL_QUERIES.getCoursesSQL(data.start, data.end)),
  getCourseSQL: (data:any)=>prisma.$queryRaw(SQL_QUERIES.getCourseSQL(data.course_id)),
  getCourseIdSQL:(data:any)=>prisma.$queryRaw(SQL_QUERIES.getCourseIdSQL(data.title)),
  getLogInProfileSQL: (data:any)=>prisma.$queryRaw(SQL_QUERIES. getLogInProfileSQL(data.email, data.password)),
  getIsRegistrationSQL: (data:any)=>prisma.$queryRaw(SQL_QUERIES.getIsRegistrationSQL(data.email)),
  getUserIdSQL: (data:any)=>prisma.$queryRaw(SQL_QUERIES.getUserIdSQL(data.email)),
  getMyRoleSQL:(data:any)=>prisma.$queryRaw(SQL_QUERIES.getMyRoleSQL(data.user_id)),
  getStudent: (data:any)=>prisma.$queryRaw(SQL_QUERIES.getStudent(data.student_id)),
  getUser: (data:any)=>prisma.$queryRaw(SQL_QUERIES.getUser(data.user_id)),
  getLecturer: (data:any)=>prisma.$queryRaw(SQL_QUERIES.getLecturer(data.lecturer_id)),
  getStudentIdSQL:(data:any)=>prisma.$queryRaw(SQL_QUERIES.getStudentIdSQL(data.user_id)),
  getLecturerIdSQL:(data:any)=>prisma.$queryRaw(SQL_QUERIES.getLecturerIdSQL(data.user_id)),

  postRegistrationStudent:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postRegistrationStudent(data.fcs, data.information, data.user_id)),
  postRegistrationLecturer:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postRegistrationLecturer(data.fcs, data.information, data.speciality, data.experience, data.user_id)),
  postRegistrationUser:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postRegistrationUser(data.role, data.email, data.password)),
  postCourse:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postCourse(data.title, data.descript, data.price, data.duration, data.lecturer_id)),
  postStudentCourse:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postStudentCourse(data.student_id, data.course_id)),
  postLecturerCourse:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postLecturerCourse(data.lecturer_id, data.course_id)),

  updateStudent:(data:any)=>prisma.$queryRaw(SQL_QUERIES.updateStudent(data.student_id, data.fcs, data.information)),
  updateLecturer:(data:any)=>prisma.$queryRaw(SQL_QUERIES.updateLecturer(data.lecturer_id, data.fcs, data.information, data.speciality, data.experience)),


  backupUsers:(data:any)=>prisma.$queryRaw(SQL_QUERIES.backupUsers()),
  backupLecturers:(data:any)=>prisma.$queryRaw(SQL_QUERIES.backupLecturers()),
  backupStudents:(data:any)=>prisma.$queryRaw(SQL_QUERIES.backupStudents()),
  backupCourses:(data:any)=>prisma.$queryRaw(SQL_QUERIES.backupCourses()),
  backupStudentCourse:(data:any)=>prisma.$queryRaw(SQL_QUERIES.backupStudentCourse()),
  backupLecturerCourse:(data:any)=>prisma.$queryRaw(SQL_QUERIES.backupLecturerCourse()),
  
  // //самое популярное направление зимой
  // getPopylarWinterPassage: ()=>prisma.$queryRaw(SQL_QUERIES.getPopylarWinterPassage),
  // //самое популярное направление весной
  // getPopylarSpringPassage: ()=>prisma.$queryRaw(SQL_QUERIES.getPopylarSpringPassage),
  // // рейтинг поездов по вагонам
  // getRatingTrains: ()=>prisma.$queryRaw(SQL_QUERIES.getRatingTrains)
};

export { prismaQueries };
