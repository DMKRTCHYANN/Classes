class Shiritory {
    #words;
    #gameOver;

    constructor() {
        this.#words = [];
        this.#gameOver = false;
    }

    play(word) {
        if (this.#gameOver) {
            return "Game is already over. Please restart to play again.";
        }

        if (this.#words.length === 0) {
            this.#words.push(word);
            return this.#words;
        } else {
            const lastWord = this.#words[this.#words.length - 1];
            const lastChar = lastWord[lastWord.length - 1];

            if (lastChar === word[0] && !this.#words.includes(word)) {
                this.#words.push(word);
                return this.#words;
            } else if (lastChar !== word[0]) {
                this.#gameOver = true;
                return `Game over - ${word} should start with "${lastChar}"`;
            } else {
                this.#gameOver = true;
                return `Game over - ${word} has already been said`;
            }
        }
    }

    restart() {
        this.#words = [];
        this.#gameOver = false;
        return "Game restarted";
    }
}

const myShiritori = new Shiritory();

console.log(myShiritori.play("apple")); 
console.log(myShiritori.play("ear")); 
console.log(myShiritori.play("rhino"));
console.log(myShiritori.play('begemot'));

