class Console {

    constructor(type) {
        this.type = type
        this._history = []
    }
    get history () {
        return this._history
    }
    set history (a) {}

    log(...args) {
        if (args.length === 1 && this.type === "Regular") {
            this._history.push(`${this.type} : [ ${args[0]} ]`)
            console.log(`${this.type} : [ ${args[0]} ]` )
        }

        else if (args.length === 1 && this.type === "Fancy") {
            this._history.push(`${this.type} : ` + JSON.stringify(args[0]))
            console.log(`${this.type} : ` + JSON.stringify(args[0]))
        }
        
        else {
            let res = "";
            for (let i = 1; i < args.length; i++) {
                if (i !== args.length - 1) res += args[i] + ", "
                else res += args[i]
            }

            this._history.push(`${args[0]} ${res}`)
            console.log(`${args[0]} ${res}`)
        }
    }

    historyy(range = [0, 0]) {
        const [start, end] = range;
        let res = ""
        for (let i = start; i < end; i++) {
            if (this._history[i]) {
                res += this._history[i] + "\n"
            }
        }
        console.log(res);
    }

    clearHistory() {
        this._history.length = 0
        console.log(true);
    }
}

const myConsole = new Console('Regular');
const fancyConsole = new Console('Fancy');

myConsole.log([0, 1, 2, 3]) // "Regular: [0,1,2,3]"
myConsole.log({ a:1, b:2 }) // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3) ➞ "ok : 1, 2, 3"
myConsole.clearHistory() // true
myConsole.history() // ""