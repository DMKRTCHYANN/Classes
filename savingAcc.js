class Account {
    static ids = []

    constructor (name , balance) {
        this.id = Account.ids.length
        this._name = name
        this._balance = balance
        Account.ids.length++
    }

    get balance () {
        return this._balance
    }
    
    set balance (a) {
        this._balance = a
    }

    get name () {
        return this._name
    }
    set name (a) {
        this._name = a
    }

    credit(amount) {
        this._balance += amount
        return this._balance
    }

    debit(amount) {
        if(amount < this._balance) {
            this._balance -= amount
            return this._balance
        }
        else return "Amount exceeded balance."
    }


    transferTo(anotherAccaunt , amount) {
        if(amount < this._balance) {
            this._balance -= amount
            anotherAccaunt._balance += amount
            return this._balance
        }
        else return "Amount exceeded balance"
    }

    static identifyAccounts(accountFirst, accountSecond) {
        for(let key in accountFirst) {
            if(accountFirst[key] !== accountSecond[key]) return false
        } return true
    }

    toString () {
        return `${this._name}'s account balance is $${this._balance}`
    }
}