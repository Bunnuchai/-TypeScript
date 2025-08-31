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
//โค้ดทดสอบ
const student1 = new Student("S001", "Bunnuchai");
student1.addCourse(new Course("Math", 3.5));
student1.addCourse(new Course("English", 4.0));
student1.addCourse(new Course("Science", 3.2));

student1.display();
