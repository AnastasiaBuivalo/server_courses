import { prisma } from '../db';
//import { RowDataPacket } from "mysql2";
import { SQL_QUERIES } from '../SQL';

const prismaQueries = {
  getMyCourseSQL:(student:any)=>prisma.$queryRaw(SQL_QUERIES.getMyCourseSQL(student.student_id)),
  getCourseSQL: (data:any)=>prisma.$queryRaw(SQL_QUERIES.getCourseSQL(data.start, data.end)),
  getLogInProfileSQL: (data:any)=>prisma.$queryRaw(SQL_QUERIES. getLogInProfileSQL(data.email, data.password)),
  getIsRegistrationSQL: (data:any)=>prisma.$queryRaw(SQL_QUERIES.getIsRegistrationSQL(data.email)),
  postRegistrationStudent:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postRegistrationStudent(data.fcs, data.email, data.password, data.information)),
  postRegistrationLecturer:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postRegistrationLecturer(data.fcs, data.email, data.password, data.information, data.speciality, data.experience )),
  postRegistrationUser:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postRegistrationUser(data.role, data.student_id, data.lecturer_id)),
  postCourse:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postCourse(data.title, data.descript)),
  postStudentCourse:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postStudentCourse(data.student_id, data.course_id)),
  postLecturerCourse:(data:any)=>prisma.$queryRaw(SQL_QUERIES.postLecturerCourse(data.lecturer_id, data.course_id)),

  //самое популярное направление зимой
  getPopylarWinterPassage: ()=>prisma.$queryRaw(SQL_QUERIES.getPopylarWinterPassage),
  //самое популярное направление весной
  getPopylarSpringPassage: ()=>prisma.$queryRaw(SQL_QUERIES.getPopylarSpringPassage),
  // рейтинг поездов по вагонам
  getRatingTrains: ()=>prisma.$queryRaw(SQL_QUERIES.getRatingTrains)
};

export { prismaQueries };
