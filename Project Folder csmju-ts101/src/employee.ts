// ประกาศ Interface สำหรับพนักงาน
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

// สร้างอาเรย์ของพนักงาน
const employees: Employee[] = [
  { id: 1, name: "Boonchai", position: "Backend Developer", salary: 40000 },
  { id: 2, name: "Somsri", position: "Frontend Developer", salary: 38000 },
  { id: 3, name: "Anucha", position: "DevOps Engineer", salary: 42000 }
];

// ฟังก์ชันค้นหาพนักงานตามชื่อ
function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
}

// แสดงผลข้อมูลพนักงานทั้งหมด
console.log("รายชื่อพนักงานทั้งหมด:");
employees.forEach(emp => {
  console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
});

// ทดสอบการค้นหาพนักงาน
const searchName = "Somsri";
const result = findEmployeeByName(searchName);

console.log(`\nผลการค้นหาพนักงานชื่อ "${searchName}":`);
if (result) {
  console.log(`พบ: ID: ${result.id}, Name: ${result.name}, Position: ${result.position}, Salary: ${result.salary}`);
} else {
  console.log("ไม่พบพนักงานที่ต้องการค้นหา");
}