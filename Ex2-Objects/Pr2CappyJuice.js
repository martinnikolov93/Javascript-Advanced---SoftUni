function solve (inputArr){

    let juices = [];

    for(let line of inputArr){
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);
        juices.push({juice, quantity});
    }

    console.log(JSON.stringify(bottles));
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
    ]
);