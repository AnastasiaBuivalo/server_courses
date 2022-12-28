import  {Prisma} from '@prisma/client'

export const SQL_QUERIES = {

  getMyCourseSQL: (student_id:Number) => Prisma.sql`
  select * from all_course
  where all_course.id = (select course_id from student_course
                            where student_id = ${student_id});
  `,

  getMyCreateCourseSQL: (lecturer_id:Number) => Prisma.sql`
  select * from all_course
  where all_course.id = (select course_id from lecturer_course
                            where lecturer_id = ${lecturer_id});
  `,

  getCoursesSQL: (start:Number, end:Number) => Prisma.sql`
      select * from all_course
      where id < ${end} and id >=  ${start};
      `,
  getCourseSQL: (course_id:Number) => Prisma.sql`
  select * from all_course
  where id = ${course_id};
  `,

  getCourseIdSQL: (title:string) => Prisma.sql`
  select id from all_course
  where title = ${title};
  `,

  getLogInProfileSQL: (email:string, password:string)=>Prisma.sql `   
    select count(password) from users
    where email = ${email} and password = ${password};`,

  getIsRegistrationSQL: (email:string)=>Prisma.sql `
    select count(password) from users
    where email = ${email} 
  `,

  getStudent:(student_id:string)=>Prisma.sql `
  select * from students
  where id = ${student_id} 
`,

  getLecturer:(lecturer_id:string)=>Prisma.sql `
  select * from lecturers
  where id = ${lecturer_id} 
  `,

  getUser:(user_id:string)=>Prisma.sql `
  select * from users
  where id = ${user_id} 
  `,

  getUserIdSQL: (email:string)=>Prisma.sql `
    select id from users
    where email = ${email} 
`,

  getMyRoleSQL:(user_id:Number)=>Prisma.sql `
  select role from users
  where id = ${user_id} 
`,

  getStudentIdSQL:(user_id:Number)=>Prisma.sql `
  select id from students
  where user_id = ${user_id} 
`,

  getLecturerIdSQL:(user_id:Number)=>Prisma.sql `
  select id from lecturers
  where user_id = ${user_id} 
  `,


    postRegistrationStudent:(fcs:string, information:string, user_id:Number)=>Prisma.sql`
  insert into students
    (fcs, information, user_id)
    values
        (${fcs}, ${information}, ${user_id});
  `,

  postRegistrationLecturer:(fcs:string, information:string, speciality:string, experience:string, user_id:Number)=>Prisma.sql`
  insert into lecturers
    (fcs, information, speciality, experience, user_id)
    values
        (${fcs}, ${information}, ${speciality}, ${experience}, ${user_id});
  `,


  postRegistrationUser:(role:string, email:string, password:string)=>Prisma.sql`
    insert into users
    (role, email, password)
    values
      (${role}, ${email}, ${password});
  `,

  //добавить параметры позже
  postCourse:(title:string, descript:string, price: Number, duration: Number, lecturer_id:Number)=>Prisma.sql`
  insert into all_course
  (title, descript, price, duration, lecturer_id)
  values
      (${title}, ${descript}, ${price}, ${duration}, ${lecturer_id});
  `,

  postStudentCourse:(student_id:Number, course_id:Number)=>Prisma.sql`
  insert into student_course
  (student_id, course_id)
  values
    (${student_id}, ${course_id});`,


  postLecturerCourse:(lecturer_id:Number, course_id:Number)=>Prisma.sql`
  insert into lecturer_course
  (lecturer_id, course_id)
  values
    (${lecturer_id}, ${course_id});`,

  updateStudent:(student_id:Number, fcs:string, information:string)=>Prisma.sql`
  update students
  set fcs = ${fcs}, information = ${information}
      WHERE id = ${student_id};`,

  updateLecturer:( lecturer_id:Number, fcs:string, information:string, speciality:string, experience:string)=>Prisma.sql`
  update lecturers
  set fcs = ${fcs}, information = ${information}, speciality = ${speciality}, experience = ${experience}
      WHERE id = ${lecturer_id};`,



  backupUsers:( )=>Prisma.sql`
  select * from users`,
  backupLecturers:( )=>Prisma.sql`
  select * from lecturers`,
  backupStudents:( )=>Prisma.sql`
  select * from students`,
  backupCourses:( )=>Prisma.sql`
  select * from all_course`,
  backupStudentCourse:( )=>Prisma.sql`
  select * from student_course`,
  backupLecturerCourse:( )=>Prisma.sql`
  select * from lecturer_course`,


  // getPopylarWinterPassage:Prisma.sql `
  // select direction, count(seat.stat) from passage
  // join railway_carriage rc on passage.train_id = rc.train_id
  // join seat on rc.id = seat.railway_carriage_id
  // where arrival_date >= '2021-12-01' and arrival_date < '2022-03-01' and seat.stat = 'занято'
  // group by passage.direction
  // order by count(seat.stat) desc
  // limit 1;
  // `,
  // getRatingTrains:Prisma.sql `
  // select train.num, rc.class, count(seat.stat) from train
  // join railway_carriage rc on train.id = rc.train_id
  // join seat on rc.id = seat.railway_carriage_id
  // where seat.stat = 'занято'
  // group by rc.class, train.num
  // order by  count(seat.stat) desc, train.num desc;
  // `,
  // getPopylarSpringPassage:Prisma.sql `
  // select direction, count(seat.stat) from passage
  // join railway_carriage rc on passage.train_id = rc.train_id
  // join seat on rc.id = seat.railway_carriage_id
  // where arrival_date >= '2022-03-01' and arrival_date < '2022-06-01' and seat.stat = 'занято'
  // group by passage.direction
  // order by count(seat.stat) desc
  // limit 1;
  // `
} as const;

