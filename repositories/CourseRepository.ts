import { Course } from "../models/Course";
import { BaseRepository } from "./BaseRepository";

const sampleCourses: Course[] = [
  { id: "1", title: "TypeScript 101", description: "Intro to TypeScript" },
  { id: "2", title: "Node.js Basics", description: "Learn backend with Node" },
];

export class CourseRepository extends BaseRepository<Course> {
  constructor() {
    super(sampleCourses);
  }
}
