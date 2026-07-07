const input: number = 7;

let prime: boolean = true;

if(input <= 1){
    console.log(input+ " is not a prime number");
    prime = false;
}

for(let i: number = 2; i<= Math.sqrt(input); i++){
    if (input % i === 0){
        prime = false;
        break;
    }
}

if(prime) {
    console.log(input+ " is a prime number");
} else {
    console.log(input+ " is not a prime number");
}