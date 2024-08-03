
// 1)
let age = 20; // You can set this to any number to test
let canVote = true;

if (age >= 18) {
  console.log(canVote);
} else {
    canVote = false;
}
console.log();; // This will print true if age is 18 or greater, otherwise false

//2)
let temerature123 = 9;
let weather;
if (temerature123 < 0){
     weather = "freezing";
    console.log(weather);
} else {
     (weather = "notFreezing");
}
console.log(weather);
//3)
let score = 61;
let result;
if (score >= 60){
     result = "pass";
} else {
     (result = "fail");
}
console.log(result);
//4)
let grade = 90;
let letterGrade;

if (grade >= 90){
     letterGrade = "A";
  
}    else if (grade >= 80) {
     letterGrade = "B";
} else {
letterGrade = "C"
}    
console.log(letterGrade);
//5)
let number = 21;
let isEven = true;
if ( number%2=== 0 ) isEven;
else isEven = false;
console.log(isEven);
//6)
let year = 2024;
let leapYear;
if (year % 4 === 0) leapYear = true;
else leapYear =false;
console.log(leapYear);
//7)
let hour = 13;
let period;
 if (hour < 12) period = "AM";
 else period = "PM";
 console.log(period);
 //8)
 let dayNumber = 4;
 let dayName;
 if (dayNumber === 1) {
    dayName = "Sunday";
 } else if (dayNumber === 2) {
    dayName = "Monday";
 } else if (dayNumber === 3) {
    dayName = "tuseday";
 } else if (dayNumber === 4) {
    dayName = "Wednesay";
 } else if (dayNumber === 5) {
    dayName = "Thursday";
 } else if (dayNumber === 6 ){
    dayName = "Friday";
} else dayName = "Saturday";
  console.log(dayName);
  //9)
  let namee = "";
  let hasName;
  if (namee === "" ) {
    hasName = false
  } else true;
  console.log(hasName);
  //10)
let amount = 222;
let shipping;
if (amount > 1000) {
    shipping = 0;
} else shipping =5;
console.log(shipping);
//11)
let password = "secret123";
let isLoggedIN;
if (password === "secret123") {
    isLoggedIN = true;
}else isLoggedIN = false;
console.log(isLoggedIN);
//12)
let month = 6;
let season;
if (month === 1) {
    season = "Winter";
} else if (month === 2) {
    season = "Winter";
} else if (month === 3) {
    season = "Fall";
} else if (month === 4) {
    season = "Fall";
} else if (month === 5) {
    season = "Fall";
} else if (month === 6) {
    season = "Summer";
} else if (month === 7) {
    season = "Summer";
} else if (month === 8) {
    season = "Summer";
} else if (month === 9) {
    season = "Spring";
} else if (month === 10) {
    season = "Spring";
} else if (month === 11) {
    season = "Spring";
} else if (month === 12) {
    season = "Winter";
}
console.log(season);
//13)

let income = 350000;
let credirScore = 770;
let loanApproved;
if (income > 50000 && credirScore > 700) {
    loanApproved = true;
}
console.log(loanApproved);
//14)

let agee = 23;
let discount;
if (agee < 18 && agee > 65) {
    discount = 0.2;
} else discount = 0;
console.log(discount);
//15)

let newNumber = 9;
let inRange;
if (newNumber <= 10) {
    inRange = true
} else inRange = false;
console.log(inRange);
//16)

let dayNumberr = 5;
let dayNamee;

switch (dayNumberr) {
    case 1:
        dayNamee = "Sunday";
        break;
        case 2:
        dayNamee = "Monday";
        break;
        case 3:
        dayNamee = "Tuesday";
        break;
        case 4:
        dayNamee = "Wednesday";
        break;
        case 5:
        dayNamee = "Thursday";
        break;
        case 6:
        dayNamee = "Friday";
        break;
        case 7:
        dayNamee = "Saturday";
        break;
            default:
                dayNamee = "Invalid day number";
        break;
}
console.log(dayNamee);

//17)

let gradee = "A";
let description;

switch (gradee){
case "A":
description = "Excellent";
break;
case "B":
    description = "Good";
    break;
    case "C":
        description = "Competent";
        break;
        case "D":
            description = "Unsatisfactory"
            break;
            case "F":
                description = "Fails"
                break;
                default:
                    description = "Out of range";

}
console.log(description);
//18)

let numeriko = 5;
let sign;
if (numeriko > 0) sign = "positive";
else if (numeriko < 0) sign = "negative";
else sign = "even";
console.log(sign);
//19)

let Yearnum = 2024;
let isCenturyLeapYear;

if (Yearnum % 400 === 0 && Yearnum % 100 === 0) {
    isCenturyLeapYear = true;
} else isCenturyLeapYear = false;
console.log(isCenturyLeapYear);
//20)

let month1 = 3;
let daysInMonth;

switch (month1){
    case 1:
        daysInMonth = "31";
        break;
        case 2:
            daysInMonth = "28";
            break;
            case 3:
            daysInMonth = "31";
            break;
            case 4:
            daysInMonth = "30";
            break;
            case 5:
            daysInMonth = "31";
            break;
            case 6:
            daysInMonth = "30";
            break;
            case 7:
            daysInMonth = "31";
            break;
            case 8:
            daysInMonth = "31";
            break;
            case 9:
            daysInMonth = "30";
            break;
            case 10:
            daysInMonth = "31";
            break;
            case 11:
            daysInMonth = "30";
            break;
            case 12:
            daysInMonth = "31";
            break;
            default:
                daysInMonth = "out of range";
}console.log(daysInMonth);

//21)

let nestednumber = -8;
let sign1;
let parity;

if (nestednumber > 0){
    sign1 = "Positive";
if (nestednumber % 2 === 0) {
    parity = "Even";
} else {
    parity = "Odd";
}

}  else if (nestednumber < 0) {
    sign1 = "Negative";
     if (nestednumber % 2 === 0) {
        parity = "An even negative number";
     } else {
        parity = "An odd negative number";
       }
     } else {
         sign1 = "Zero";
         parity = "Neither even nor odd";
}
console.log(`Sign: ${sign1}` + " , " + parity);
//22)

let score123 = 90;
let attendance = 75;
let grade123;

if (score123 >= 90 ) {
    grade123 = `A`;
} else if (grade123 >= 80) {
    grade123 = `B`;
  }else if (grade123 >= 70) {
    grade123 = `C`;
  } else if (grade123 >= 60) {
    grade123 = `D`;
  } else grade123 = "F";

  if (attendance < 80) {
    if (grade123 === `A`) {
        grade123 = `B`;
    } else if (grade123 === `B`) {
        grade123 = `C`;
    }else if (grade123 ===`C`) {
        grade123 = `D`;
    }
      }
      console.log(grade123);
//23)

let isLeapYear = 2024;

if (isLeapYear % 400 === 0) {
    isLeapYear = true;
}else if (isLeapYear & 100 === 0) {
        isLeapYear = true;
    } else if ( isLeapYear % 4 === 0) {
        isLeapYear = true;
    } else isLeapYear = false;
    console.log(isLeapYear);
    //24)

    let age2 = 27;
    let isEmployed = true;
    let category;

    if (age2 < 18 ) {
        category = "Student";
    }else if (age2 >= 18 && age2 <= 65 ) {
      if (isEmployed){
        category = "Employed Adult";
    } else category = "Unemployed Adult";
}
else category = "Retire";

console.log(age2," ",category);
    
    //25)

    let monthh = 4; // חודש לדוגמה: מרץ
    let seasonn = '';

switch (monthh) {
    case 1:
    case 2:
    seasonn = `Winter`;
break;
case 3:
    seasonn = `Spring`;
    break;
    case 4:
        seasonn = `Spring` + " " + `Winter`;
        break;
        case 5: 
        seasonn =  `Spring`
 break;
 case 6:
    case 7:
        case 8:
            case 9:
    seasonn = `Summer`;
    break;
    case 10:
        case 11:
            case 12:
                 season = `Fall`;
                 break;
        default:
            monthh = `Invalid month`
        break;
}

console.log(seasonn);

// 26)

let X = -4;
let Y = 5;
let quadrnat;

if (X > 0 ) { 
if (Y > 0) {
    quadrnat = "1";
} else if (Y < 0) {
    quadrnat = "4";
} else quadrnat = "X on axis";
} else if (X < 0) {
    if (Y < 0) {
        quadrnat = "3";
     } else if (Y > 0) {
            quadrnat = "2";
        }else quadrnat = "X on axis"
        
    }else { // x is 0
        if (y > 0) {
            position = "On Y-axis"; // x is 0, y is positive
        } else if (y < 0) {
            position = "On Y-axis"; // x is 0, y is negative
        } else {
            position = "Origin"; // x and y are both 0
        }
    }
    
console.log(quadrnat)

// 27)   //solid // liquid // gas
let temperature = 30;
let pressure = 2;

if (temperature > 0 && temperature < 100) {
    if (pressure === 1) {
        console.log(" The At standard pressure, water is liquidis liquid.");
    }
     else if (pressure < 1) {
    console.log(`Lower pressure may cause water to boil at a temperature lower than 100°C, turning it into gas.`);
     }
     else {
     console.log(`Higher pressure can keep water in liquid form even at temperatures above 100°C.`);
     }
} else if (temperature <= 0) {
    if (pressure >= 1) {
        console.log("Water is in solid state (ice).");
       } else {
        console.log("Water might still be solid, but with lower pressure, freezing point decreases.");
       }
} else {
    if (pressure === 1) {
        console.log("Water is in gas state (steam).");
    } else if (pressure < 1) {
        console.log("At lower pressure, water has boiled and is gas.");
    } else {
        console.log("At higher pressure, water might still be liquid even above 100°C.");
    }
    
};
    // 28
    
let month123 = 2;
let isLeapYear123 = true;

    switch (month123) {
        case 1:
           month123 = "January - 31 days"
            break;
            case 2:
                 if (isLeapYear123 = true) {
                  console.log( "February - 29 days");}  
                else console.log( "February - 28 days");
                 break;
                 case 3:
                    month123 = "March - 31 days"
                     break;
                     case 4:
                        month123 = "April - 30 days"
                         break;
                         case 5:
                            month123 = "May - 31 days"
                             break;
                             case 6:
                                month123 = "June - 30 days"
                                 break;
                                 case 7:
                                    month123 = "July - 31 days"
                                     break;
                                     case 8:
                                        month123 = "August - 31 days"
                                         break;
                                         case 9:
                                            month123 = "September - 30 days"
                                             break;
                                             case 10:
                                                month123 = "October - 31 days"
                                                 break;
                                                 case 11:
                                                    month123 = "November - 30 days"
                                                     break;
                                                     case 12:
                                                        month123 = "December - 31 days"
                                                         break;                                                                                                                                                                                                                                                                                      
        default: " Not valid day"
            break;
    };

    
