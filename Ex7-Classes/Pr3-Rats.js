class Rat {

    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(rat){
        if (rat instanceof Rat){
            this.unitedRats.push(rat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString(){
        let unitedRatsString = '';
        for (let i = 0; i < this.unitedRats.length; i++) {
            unitedRatsString += '\n##' + this.unitedRats[i].name;
        }
        return this.name + unitedRatsString;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
