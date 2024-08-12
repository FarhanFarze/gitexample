function determineGrade(score){
    if (score >= 90){
        return("A Grade")
    }
    else if (score > 80 && score < 89){
        return("B Grade")
    }
    else if (score > 70 && score < 79){
        return("C Grade")
    }
    else if (score > 60 && score < 69){
        return("D Grade")
    }
    else if (score <= 60){
        return("F Grade")
    }
}
console.log(determineGrade(99));
console.log(determineGrade(81));
console.log(determineGrade(75));
console.log(determineGrade(68));
console.log(determineGrade(56))