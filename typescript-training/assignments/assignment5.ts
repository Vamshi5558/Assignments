type Employee = {
    name : string;
    baseSalary : number;
    experience : number;
    rating : number;
};

const employees: Employee[] = [
    {name: "Alice Jhonson", baseSalary: 75000.0, experience: 5.1, rating: 4.2},
    {name: "Bob Smith", baseSalary: 68000.0, experience: 3.2, rating: 3.8},
    {name: "Carol Davis", baseSalary: 82000.0, experience: 7.1, rating: 4.5},
    {name: "David Brown", baseSalary: 90000.0, experience: 10.2, rating: 2.5},
    {name: "Eva Green", baseSalary: 60000.0, experience: 2.4, rating: 3.5},
];

function calculateHikePercent(emp: Employee): number {
    let variablePayPercent: number;
    let bonus: number;

    if(emp.rating>=4.0){
        variablePayPercent= 15.0;
        bonus= 1500;
    } else if(emp.rating>=3.0 && emp.rating<4.0){
        variablePayPercent= 10.0;
        bonus= 1200;
    } else{
        variablePayPercent= 3.0;
        bonus= 300;
    }

    const reward = emp.experience>=5.0 ? 5000 : 0;

    const hike = (emp.baseSalary * variablePayPercent) + bonus + reward;
    const hikePercent = hike / emp.baseSalary;

    return hikePercent;
}

console.log("Employee Hike Percentages:");
for (const emp of employees) {
  const hikePercent = calculateHikePercent(emp);
  console.log(`${emp.name} → ${(hikePercent * 100).toFixed(2)}%`);
}