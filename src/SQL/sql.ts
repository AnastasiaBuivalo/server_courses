import  {Prisma} from '@prisma/client'

export const SQL_QUERIES = {

  getMyCourseSQL: (student_id:Number) => Prisma.sql`
    select * from all_course
    join student_course on course_id = all_course.id
    where course_id = (select course_id from student_course
                                  where student_id = ${student_id});
  `,

  getCourseSQL: (start:Number, end:Number) => Prisma.sql`
      select * from all_course
      where id < ${end} and id >=  ${start};
      `,

  getLogInProfileSQL: (email:string, password:string)=>Prisma.sql `   
    select count(password) from students
    where email = ${email} and password = ${password};`,

  getIsRegistrationSQL: (email:string)=>Prisma.sql `
    select count(password) from students
    where email = ${email} 
  `,


    postRegistrationStudent:(fcs:string, email:string, password:string, information:string)=>Prisma.sql`
  insert into students
    (fcs, email, password, information)
    values
        (${fcs}, ${email}, ${password}, ${information});
  `,

  postRegistrationLecturer:(fcs:string, email:string, password:string, information:string, speciality:string, experience:string )=>Prisma.sql`
  insert into lecturers
    (fcs, email, password, information, speciality, experience)
    values
        (${fcs}, ${email}, ${password}, ${information}, ${speciality}, ${experience});
  `,


  postRegistrationUser:(role:string, student_id:number, lecturer_id:number)=>Prisma.sql`
    insert into users
    (role, student_id, lecturer_id)
    values
      (${role}, ${student_id}, ${lecturer_id});
  `,

  //добавить параметры позже
  postCourse:(title:string, descript:string)=>Prisma.sql`
  insert into all_course
  (title, descript)
  values
      (${title}, ${descript});
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

  getPopylarWinterPassage:Prisma.sql `
  select direction, count(seat.stat) from passage
  join railway_carriage rc on passage.train_id = rc.train_id
  join seat on rc.id = seat.railway_carriage_id
  where arrival_date >= '2021-12-01' and arrival_date < '2022-03-01' and seat.stat = 'занято'
  group by passage.direction
  order by count(seat.stat) desc
  limit 1;
  `,
  getRatingTrains:Prisma.sql `
  select train.num, rc.class, count(seat.stat) from train
  join railway_carriage rc on train.id = rc.train_id
  join seat on rc.id = seat.railway_carriage_id
  where seat.stat = 'занято'
  group by rc.class, train.num
  order by  count(seat.stat) desc, train.num desc;
  `,
  getPopylarSpringPassage:Prisma.sql `
  select direction, count(seat.stat) from passage
  join railway_carriage rc on passage.train_id = rc.train_id
  join seat on rc.id = seat.railway_carriage_id
  where arrival_date >= '2022-03-01' and arrival_date < '2022-06-01' and seat.stat = 'занято'
  group by passage.direction
  order by count(seat.stat) desc
  limit 1;
  `
} as const;

