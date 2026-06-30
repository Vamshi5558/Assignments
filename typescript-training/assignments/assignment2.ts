function evaluateLoanApplication(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    DTIRatio: number
): string {
    if (creditScore > 750) {
        return `${customerName} is eligible: Loan Approved`;
    } else if (creditScore >= 650 && creditScore <= 750) {
        if (income >= 50000) {
            if (isEmployed) {
                if (DTIRatio < 40) {
                    return `${customerName} is eligible: Loan Approved(DTIRatio acceptable)`;
                } else { return `${customerName} is not eligible: Loan Denied(High DTIRatio)` }
            } else { return `${customerName} is not eligible: Loan Denied(Unemployed)` }
        } else { return `${customerName} is not eligible: Loan Denied(Income less than 50000)` }
    } else { return `${customerName} is not eligible: Loan Denied(Low credit score)` }

}

const customerName = "John Doe";
const creditScore = 720;
const income = 55000.0;
const isEmployed = true;
const DTIRatio = 35.0;

console.log(evaluateLoanApplication(customerName, creditScore, income, isEmployed, DTIRatio));