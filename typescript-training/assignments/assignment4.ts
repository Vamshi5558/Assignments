const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditCount: number = 0;
let debitCount: number = 0;
let totalCredit: number = 0;
let totalDebit: number = 0;
let suspiciousCount: number = 0;

for (let i = 0; i < transactions.length; i++) {
    const amount: number = transactions[i]!;

    if (amount > 0) {
        creditCount++;
        totalCredit += amount;
        if (amount > 10000) {
            console.log(`Suspicious credit transaction with Amount: ${amount}`);
            suspiciousCount++;
        }
    } else {
        debitCount++;
        totalDebit += amount;
        if (amount < -10000) {
            console.log(`Suspicious debit transaction with Amount: ${amount}`);
            suspiciousCount++;
        }
    }
}

const remainingBalance: number = totalCredit + totalDebit;

console.log(`Total Credit Transactions: ${creditCount}`);
console.log(`Total Debit Transactions: ${debitCount}`);
console.log(`Total Amount Credited: ${totalCredit}`);
console.log(`Total Amount Debited: ${Math.abs(totalDebit)}`); // make debit positive for readability
console.log(`Remaining Balance: ${remainingBalance}`);
console.log(`Total Suspicious Transactions: ${suspiciousCount}`);