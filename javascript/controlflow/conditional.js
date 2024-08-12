//.....if....//

let temp = (34);
if (temp > 30){
    console.log("Excessive Heat")
}

//......if else.....//

let age = 16;
if (age >= 18){
    console.log("You are an adult")
    } else {
        console.log("You are a minor")
        }
// age = 20 print you are an adult
// age = 16 print you are a minor

//......if_else if_else....//

let rating = 4;
if (rating <= 2){
    console.log("Bad rating")
}
else if (rating >= 4){
    console.log("Good rating")
}
else {
    console.log("Average rating")
    }

 //........Switch statement.......//

 let day = "sunday"
 switch (day) {
    case "monday":
        console.log("set alaram for 4 am");
        break;
        case "tuesday":
            console.log("set alaram for 4:30 am");
            break;
            case "wednesday":
                console.log("set alaram for 5 am");
                break;
                case "thursday":
                    console.log("set alaram for 5:30 am");
                    break;
                    case "friday":
                        console.log("set alaram for 6 am");
                        break;
                        case "saturday":
                            console.log("set alaram foe 6:30 am");
                            break;
                            case "sunday":
                                console.log("set alaram for 7 am");
                                break;
                                default:
                                    console.log("enter a valid day");
                                    break;
                                    }