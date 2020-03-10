let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];


function withdraw(clients, balances, client, amount) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) {
            balances[i] = balances[i] - amount;
            console.log(balances[i]);
        }
    }
    return balances;
}

withdraw(clients, balances, 'John', 50);
console.log(balances);