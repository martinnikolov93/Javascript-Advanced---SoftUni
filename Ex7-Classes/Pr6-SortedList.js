class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(value){
        this.list.push(value);
        this.list.sort((a, b) => a - b);
        this.size++;

        return this;
    }

    remove(index){
        if (index < 0 || index >= this.list.length){
            throw new Error('kude otivash ti moje bi');
        }
        this.list.splice(index, 1);
        this.size--;

        return this;
    }

    get(index){
        if (index < 0 || index >= this.list.length){
            throw new Error('kude otivash ti moje bi');
        }
        return this.list[index];
    }
}

let list = new List();
list.add(5);
list.add(3);
list.remove(0);
console.log(list.get(0));
console.log(list.size);
