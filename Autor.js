class Author {
  
    constructor(name , email , gender) {
        this._name = name
        this._email = email
        this._gender = gender
    }


    get name () {
        return this._name
    }
    set name (name) {
        throw new Error(`You cannot change the name `)
    }

    get email () {
        return this._email
    }
    set email (email) {
        throw new Error(`You cannot change the email`)
    }

    get gender () {
        return this._gender.toLowerCase()
    }
    set gender (gender) {
        throw new Error(`You cannot change the gender`)
    }

    toString() {
        if(this._gender === "male") return `Mrs ${this._name}`
        else return `Miss ${this._name}`
    }
}

class Book {
    

    constructor (title , price , quantity ,name ,email, gender) {
        this._title = title 
        this._price = price
        this._author = new Author("aaaa" ,"aaa.gmail.com","male")
        this._quantity = quantity
    }
    
    get author () {return this._author}
    set author (a) {}

    get title () {
        return this._title
    }
    set title (a) {
        throw new Error(`You cannot change the title `)
    }

    get price () {
        return this._price
    }
    set price (a) {
        throw new Error(`You cannot change the price `)
    }

    get quantity () {
        return this._quantity
    }
    set quantity (a) {
        throw new Error(`You cannot change the quantity `)
    }

    toString() {
        if(this._gender === "male") return `Mrs ${this._name}`
        else return `Miss ${this._name}`
    }

    getProfit() {
        return this._price * this._quantity
    }

}