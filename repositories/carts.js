const Repository = require('./repository');

class CartsRepository extends Repository {

    constructor(filename) {
        super(filename);
        this.counter = 0;
    }

    incCounter() {
        if (!this.counter){
            this.counter = 1;
        } else {
            this.counter++
        }
    }

    decCounter() {
        if (this.counter > 0) {
            this.counter--
        }
    }

    getCounter() {
        return this.counter;
    }
}

module.exports = new CartsRepository('carts.json');
