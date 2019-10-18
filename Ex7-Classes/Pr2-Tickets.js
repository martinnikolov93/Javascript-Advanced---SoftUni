function solve(arrayInput, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let outputArray = [];

    arrayInput.forEach(x => {
        let [destination, price, status] = x.split("|");
        outputArray.push(new Ticket(destination, price, status));
    });

    outputArray.sort((a, b) => {
        if (typeof a[sortCriteria] === 'string'){
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        } else {
            return a[sortCriteria] - b[sortCriteria];
        }
    });

    return outputArray;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));