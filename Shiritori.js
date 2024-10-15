class Console {
    constructor(type) {
        this.type = type;
        this._history = [];
    }

    get history() {
        return this._history;
    }

    set history(a) {
        // No-op, we're not allowing external modification of _history directly
    }

    log(...args) {
        if (args.length === 1 && this.type === "Regular") {
            this._history.push(`${this.type} : [ ${JSON.stringify(args[0])} ]`);
            console.log(`${this.type} : [ ${JSON.stringify(args[0])} ]`);
        } else if (args.length === 1 && this.type === "Fancy") {
            this._history.push(`${this.type} : ` + JSON.stringify(args[0], null, 2));
            console.log(`${this.type} : ` + JSON.stringify(args[0], null, 2));
        } else {
            let res = "";
            for (let i = 1; i < args.length; i++) {
                if (i !== args.length - 1) res += args[i] + ", ";
                else res += args[i];
            }
            this._history.push(`${args[0]} ${res}`);
            console.log(`${args[0]} ${res}`);
        }
    }

    history(range = [0, this._history.length]) {
        const [start, end] = range;
        let res = "";

        // Ensure range is within bounds
        const actualEnd = Math.min(end, this._history.length);

        for (let i = start; i < actualEnd; i++) {
            if (this._history[i]) {
                res += this._history[i] + "\n";
            }
        }
        console.log(res);
    }

    clearHistory() {
        this._history.length = 0;
        console.log(true);
    }
}

const myConsole = new Console('Regular');
const fancyConsole = new Console('Fancy');

// Test cases
myConsole.log([0, 1, 2, 3]); // "Regular: [0,1,2,3]"
fancyConsole.log({ a: 1, b: 2 }); // "Fancy: {a: 1, b: 2}"
myConsole.log("ok : ", 1, 2, 3); // "ok : 1, 2, 3"
myConsole.clearHistory(); // true
myConsole.history(); // ""

