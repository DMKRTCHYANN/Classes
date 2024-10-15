
class Exam {
    consructor(...exam) {
        exam.forEach((elem) => {
            this.elem = elem
        })
    }
}

let exams = new Exam ("math" , "english")

class Person {
    #firstName
    #lastName
    #gender
    #age

    constructor(firstName , lastName , gender , age) {
        this.#firstName = firstName
        this.#lastName = lastName
        this.#gender = gender
        this.#age = age
    }

    get firstName () {
        return this.#firstName
    }
    set firstName (a) {}

    get lastName () {
        return this.#lastName
    }
    set lastName (a) {}

    get gender () {
        return this.#gender
    }
    set gender (a) {}

    get age () {
        return this.#age
    }
    set age (a) {}

    toString() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`
    }
}


class Student extends Person {

    constructor (firstName,lastName,gender,age,year , fee) {
        super(firstName,lastName,gender,age)
        this._year = year
        this._fee = fee
        this._program = []
    }

    get year () { return this._year}
    set year (a) {}

    get fee () {return this._fee}
    set fee (a) {}

    get program () {return this._program}
    set program (a) {}

    passExam (programName , grade) {
        if(grade >= 50) this._year += 1
        for(let value of this._program) {
            if(value.programName === programName) {
                value.grade = (value.grade + grade) / 2 
                return this._program
            }
        }

        this.program.push({programName  : programName , grade : grade})
        return this._program
    }

    isAllPassed () {
        let res 
        for(let key in exams) {
           x : for(let {programName} of this._program) {
             if(programName === exams[key]){
                 res = true
                 break x
             }
             else res = false
           }

           if(!res) return false
        }
           return true
    }
}

const a = new Student ("Sergey" , "Gasparyan " , "female" , 17, 150000)
console.log(a.passExam("english" , 50))
console.log(a.passExam("math" , 60))
console.log(a.isAllPassed())