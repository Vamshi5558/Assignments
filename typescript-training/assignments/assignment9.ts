function printTriangle(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "* ";
    }
    console.log(stars);
  }
}
printTriangle(5);

function printPyramid(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
  }
}
printPyramid(5);

function printInvertedTriangle(rows: number): void {
  for (let i = rows; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "* ";
    }
    console.log(stars);
  }
}
printInvertedTriangle(5);

function printInvertedPyramid(rows: number): void {
  for (let i = rows; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);   // leading spaces
    let stars = "* ".repeat(i);          // stars
    console.log(spaces + stars);
  }
}
printInvertedPyramid(5);


