//logical AND(&&)

console.log(true&&true);
console.log(true&&false);
console.log(false&&true);

// logical OR(||)
console.log(true||true);
console.log(true||false);
console.log(false||true);

//logical NOT(!)
console.log(true);
console.log(false);


//Highincome, cibilscore -> Loan eligible or ineligible

let Highincome = true;
let cibilscore = false;

let eligibleperson = Highincome || cibilscore
let applicationStutes = eligibleperson

console.log("Loan Stutes:" +eligibleperson);
console.log("application Stutes:" +eligibleperson);