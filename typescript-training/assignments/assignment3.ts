const studentName: string[] = ['Suresh', 'Mahesh', 'Naresh'];
const studentMarks: number[] = [75, 80, 82];

let updatedStudentMarks: number[] = [];
for (let i = 0; i < studentMarks.length; i++) {
    updatedStudentMarks[i] = studentMarks[i]! + 10;
    console.log(`${studentName[i]}: ${updatedStudentMarks[i]}`);
}

let total: number = 0;
for (let i = 0; i < updatedStudentMarks.length; i++) {
    total += updatedStudentMarks[i]!;
}
let average: number = total / updatedStudentMarks.length;
console.log(`Average Marks: ${average}`);