import * as fs from "fs";

import { prisma } from './db';
//import { RowDataPacket } from "mysql2";
import { SQL_QUERIES } from './SQL';

import { resolve } from "path";

import { mainRouter } from "./routers/main";
export type RowData = {[key: string]: any};
export const allBackap = async() =>{
    //fs=require("fs");
    
    const backupUsers= await prisma.$queryRaw(SQL_QUERIES.backupUsers());
    const backupLecturers= await prisma.$queryRaw(SQL_QUERIES.backupLecturers());
    const backupStudents=await prisma.$queryRaw(SQL_QUERIES.backupStudents());
    const backupCourses= await prisma.$queryRaw(SQL_QUERIES.backupCourses());
    const backupStudentCourse = await prisma.$queryRaw(SQL_QUERIES.backupStudentCourse());
    const backupLecturerCourse= await prisma.$queryRaw(SQL_QUERIES.backupLecturerCourse());

    const backup ={backupCourses, backupLecturerCourse, backupLecturers, backupStudentCourse, backupStudents, backupUsers};

    fs.writeFile("backap.txt", JSON.stringify(backup, null, "\t"), (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });
      
    fs.writeFile("backap.json", JSON.stringify(backup, null, "\t"), (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });
}
  
//setTimeout(allBackap, 1000);