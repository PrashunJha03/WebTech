// Assignment 3: Calculate student grade
// -----------------------------------------------
// Write a Anonymous function getGrade(marks) that returns a grade according to these rules:
// Marks		Grade
// 90 and above	A
// 75–89		B
// 60–74		C
// Below 60	D


const getGrade = function(marks)
{
  if(marks >= 90)
    {
        return "Grade A"
    }
    else if (marks >= 75 && marks <= 89)
        {
            return "Grade B"
        }   
    else if(marks >= 60 && marks <= 74)
        {
            return "Grade C"
        }
    else if(marks < 60)
    {
        return "Grade D"
    }
}


console.log(getGrade(97))
console.log(getGrade(60))
console.log(getGrade(40))