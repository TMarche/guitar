class CircularList {
    constructor(array){
        this.array = array;
    }

    get(index) {
        return this.array[index % this.array.length];
    }

    getArray() {
        return this.array;
    }

    toString() {
        return this.array.join(" ");
    }

    indexOf(element) {
        return this.array.indexOf(element);
    }
}

export default CircularList;