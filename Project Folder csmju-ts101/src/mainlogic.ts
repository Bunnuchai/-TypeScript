class Course {
  name: string;
  grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}

class Student {
  studentID: string;
  name: string;
  courses: Course[];

  constructor(studentID: string, name: string) {
    this.studentID = studentID;
    this.name = name;
    this.courses = [];
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  getAverage(): number {
    if (this.courses.length === 0) return 0;
    const total = this.courses.reduce((sum, course) => sum + course.grade, 0);
    return parseFloat((total / this.courses.length).toFixed(2));
  }

  display(): void {
    console.log(`รหัส: ${this.studentID}, ชื่อ: ${this.name}`);
    this.courses.forEach((course, index) => {
      console.log(`  วิชา ${index + 1}: ${course.name}, เกรด: ${course.grade}`);
    });
    console.log(`  เกรดเฉลี่ย: ${this.getAverage()}\n`);
  }
}

// สร้างนักศึกษา 3 คน
const students: Student[] = [
  new Student("S001", "Bunnuchai"),
  new Student("S002", "Somsri"),
  new Student("S003", "Anucha")
];

// รายวิชาเริ่มต้น 4 วิชา
const initialCourses = [
  new Course("Math", 3.5),
  new Course("English", 4.0),
  new Course("Science", 3.2),
  new Course("History", 2.8)
];

// เพิ่มรายวิชาเริ่มต้นให้แต่ละคน
students.forEach(student => {
  initialCourses.forEach(course => student.addCourse(course));
});

// แสดงข้อมูลก่อนเพิ่มวิชาใหม่
console.log("ข้อมูลนักศึกษาก่อนเพิ่มวิชาใหม่:");
students.forEach(student => student.display());

// เพิ่มรายวิชาใหม่คนละ 1 วิชา
students[0].addCourse(new Course("Programming", 4.0));
students[1].addCourse(new Course("Art", 3.6));
students[2].addCourse(new Course("Biology", 3.0));

// แสดงข้อมูลหลังเพิ่มวิชาใหม่
console.log("ข้อมูลนักศึกษาหลังเพิ่มวิชาใหม่:");
students.forEach(student => student.display());