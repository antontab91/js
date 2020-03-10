let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];


function withdraw(clients, balances, client, amount) {
    for (let i = 0; i < clients.length; i++) {
        if (balances[i] < amount) {
            console.log("assa");
            return -1;
        }
        if (clients[i] === client) {
            balances[i] = balances[i] - amount;
            console.log(balances[i]);
        }
    }
    return balances;
}

withdraw(clients, balances, 'John', 95);
console.log(balances);